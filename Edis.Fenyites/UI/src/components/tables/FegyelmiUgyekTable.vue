<template>
  <div>
    <k-datatable
      id="FegyemiUgyekDataTable"
      :options="fegyelmiUgyDatatableOptions"
      :dataList="fegyelmiUgyek"
      :dataKey="'FegyelmiUgyId'"
      class="pointer table-hover fegyelmiUgyek-dt"
      ref="datatable"
    >
    </k-datatable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import moment from 'moment';
import { getUgyszam } from '../../utils/fenyitesUtils';
import { FegyelmiUgyFunctions } from '../../functions/FegyelmiUgyFunctions';
import { eventBus } from '../../main';
import { FenyitesStoreTypes } from '../../store/modules/fenyites';
import { FegyelmiUgyStoreTypes } from '../../store/modules/fegyelmiugy';
import Cimkek from '../../data/enums/Cimkek';
import { UserStoreTypes } from '../../store/modules/user';
import Intezetek from '../../data/enums/intezetek';
import IFrameUrls from '../../data/enums/iframeUrls';
import { excelExportCellBool } from '../../utils/common';

export default {
  name: 'fegyelmi-ugyek-table',
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      AddFegyelmiUgySelected:
        FegyelmiUgyStoreTypes.actions.addFegyelmiUgySelected,
      RemoveFegyelmiUgySelected:
        FegyelmiUgyStoreTypes.actions.removeFegyelmiUgySelected,
    }),
    UgyReszletekMegtekintes(args) {
      console.log(args);
      eventBus.$emit('Sidebar:ugyReszletek', {
        state: true,
        data: args,
      });
    },
    DrawSelectsOnDT(ids) {
      var selected = ids
        .map((m) => {
          return `[data-id="${m}"]`;
        })
        .join(',');
      var selectedIdsInDt = Array.from(
        $(this.$refs.datatable.$el).DataTable().rows({ selected: true }).data()
      ).map((m) => m.PrdID);
      let removedFromDt = selectedIdsInDt.filter(
        (f) => !ids.some((s) => s == f)
      );
      let notSelected = removedFromDt
        .map((m) => {
          return `[data-id="${m}"]`;
        })
        .join(',');
      if (selected) {
        $(this.$refs.datatable.$el)
          .DataTable()
          .rows([selected], { selected: false })
          .select();
      }
      if (notSelected) {
        $(this.$refs.datatable.$el)
          .DataTable()
          .rows(notSelected, { selected: true })
          .deselect();
      }
    },
    GetExcelExport() {
      let capitalize = this.$options.filters.camelCaseString;
      let fegyelmiUgyek = Array.from(
        $(this.$refs.datatable.$el)
          .DataTable()
          .rows({ search: 'applied' })
          .data()
      );
      let exportData = [
        // Elk??vet??
        {
          header: 'Fogvatarott azonos??t??sz??ma ??s neve',
          getCellValue(row) {
            return `${row.AktNyilvantartasiSzam} ${row.FogvatartottNev}`;
          },
        },
        {
          header: 'Fogvatartott nyilv??ntart??si st??tusza',
          getCellValue(row) {
            return row.NyilvantartottStatusz || '';
          },
        },
        {
          header: 'Fogvatartott elhelyez??se',
          getCellValue(row) {
            return `${row.Intezet}/${row.Elhelyezes}/${row.Korlet}/${row.Zarka}`;
          },
        },
        // Esem??ny
        {
          header: 'Esem??ny napja ??s ideje',
          getCellValue(row) {
            if (row.EsemenyDatuma) {
              return `${moment(row.EsemenyDatuma).format('YYYY.MM.DD. HH:mm')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Esem??ny jellege',
          getCellValue(row) {
            return row.Jelleg || '';
          },
        },

        // ??gy
        {
          header: '??gysz??m',
          getCellValue(row) {
            return getUgyszam(row);
          },
        },
        {
          header: '??gy int??zete',
          getCellValue(row) {
            return row.FegyelmiIntezet || '';
          },
        },
        {
          header: 'Elrendel??s ideje',
          getCellValue(row) {
            if (row.DontesDatuma) {
              return `${moment(row.DontesDatuma).format('YYYY.MM.DD.')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Kivizsg??l?? szem??ly',
          getCellValue(row) {
            return capitalize(row.Kivizsgalo) || '';
          },
        },
        {
          header: 'Elrendel?? szem??ly',
          getCellValue(row) {
            return capitalize(row.Elrendelo) || '';
          },
        },
        // St??tusz
        {
          header: 'Jogszab??lyi hat??rid??',
          getCellValue(row) {
            if (row.Hatarido) {
              return `${moment(row.Hatarido).format('YYYY.MM.DD.')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Kivizsg??l??si hat??rid??',
          getCellValue(row) {
            if (row.KivizsgalasiHatarido) {
              return `${moment(row.KivizsgalasiHatarido).format(
                'YYYY.MM.DD.'
              )}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Fegyelmi ??gy st??tusza',
          getCellValue(row) {
            return row.UgyStatusz || '';
          },
        },
        {
          header: 'Feny??t??s t??pusa',
          getCellValue(row) {
            if (row.HatarozatJogerosFl && row.FenyitesTipus) {
              return row.FenyitesTipus;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Hat??rid?? lej??rt',
          getCellValue(row) {
            if (row.Csuszas > 0) {
              return `Lej??rt ${row.Csuszas} napja`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Jogi k??pviselet',
          getCellValue(row) {
            return excelExportCellBool(row.VanJogiKepviselet);
          },
        },
        {
          header: 'Felf??ggeszt??si javaslat',
          getCellValue(row) {
            return excelExportCellBool(row.FelfuggesztesiJavaslat);
          },
        },
        {
          header: 'Felf??ggesztve',
          getCellValue(row) {
            return excelExportCellBool(row.Felfuggesztve);
          },
        },
        {
          header: 'Hat??rid?? m??dos??t??si javaslat',
          getCellValue(row) {
            return excelExportCellBool(row.HataridoModositasJavaslat);
          },
        },
        // {
        //   header: 'T??rgyal??s kit??z??sre v??r',
        //   getCellValue(row) {
        //     return excelExportCellBool(
        //       row.UgyStatuszId == Cimkek.FegyelmiUgyStatusza.IFokuTargyalas &&
        //         !row.ElsofokuTargyalasIdopontja
        //     );
        //   },
        // },
        // {
        //   header: 'Reintegr??ci??b??l viszak??ldve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.Visszakuldve);
        //   },
        // },
        // {
        //   header: 'Sz??ll??t??sra el??jegyezve',
        //   getCellValue(row) {
        //     if (row.SzallitasraElojegyezve) {
        //       return `${moment(row.SzallitasraElojegyezve).format(
        //         'YYYY.MM.DD.'
        //       )}`;
        //     } else {
        //       return '';
        //     }
        //   },
        // },
        // {
        //   header: 'Szakter??leti v??lem??nyre v??r',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.SzakteruletiVelemenyreVarFL);
        //   },
        // },
        // {
        //   header: 'K??zvet??t??i elj??r??s kezdem??nyezve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.KozvetitoiEljarasKezdemenyezve);
        //   },
        // },
        // {
        //   header: 'K??zvet??t??i elj??r??sban',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.KozvetitoiEljarasban);
        //   },
        // },
        // {
        //   header: 'Elk??l??n??tve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.FegyelmiElkulonitesFL);
        //   },
        // },
        // {
        //   header: 'Jel??lje ki a jogi k??pvisel??t',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.JogiKepviseletetKer);
        //   },
        // },
      ];
      let body = [];
      let footer = null;
      fegyelmiUgyek.forEach((row) => {
        let excelRow = [];

        exportData.forEach((data) => {
          excelRow.push(data.getCellValue(row));
        });
        body.push(excelRow);
      });
      return { header: exportData.map((m) => m.header), body, footer };
    },
  },
  computed: {
    ...mapGetters({
      selected: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSelectedIds,
      userInfo: UserStoreTypes.getters.getUserInfo,
    }),
    isBvop() {
      if (!this.userInfo) {
        return false;
      }
      return this.userInfo.RogzitoIntezet.Id == Intezetek.BVOP;
    },
    fegyelmiUgyDatatableOptions() {
      var vm = this;
      let capitalize = vm.$options.filters.camelCaseString;
      var options = {
        initComplete: function (settings, json) {
          $(vm.$refs.datatable.$el)
            .DataTable()
            .on('select', function (e, dt, type, indexes) {
              var row = dt.rows(indexes).data()[0];
              vm.AddFegyelmiUgySelected({ value: row.FegyelmiUgyId });
            });
          $(vm.$refs.datatable.$el)
            .DataTable()
            .on('deselect', function (e, dt, type, indexes) {
              var row = dt.rows(indexes).data()[0];
              vm.RemoveFegyelmiUgySelected({ value: row.FegyelmiUgyId });
            });
        },
        select: {
          style: 'multiple',
          selector: 'td:first-child',
        },
        order: [[3, 'desc']],
        bSortClasses: false,
        pageLength: 50,
        aoColumns: [
          {
            mDataProp: null,
            sTitle: '',
            sWidth: 50,
            bSortable: false,
            sClass: ' select-checkbox remarkcheckbox',
            mRender: function (data, type, row, meta) {
              return '';
            },
          },
          {
            mDataProp: null, // esem??ny
            sTitle: 'Munkasz??m',
            width: '20%',
            mRender: function (data, type, row, meta) {
              var prjCode = '';
              if (row.PrjCode != null) {
                '<span class="unique-desc"><b><i>' +
                  row.PrjCode +
                  '</i></b></span>';
              }
              return prjCode;
            },
          },
          {
            mDataProp: null, // r??sztvev??k
            sTitle: 'Megrendel??s sz??m',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.OrdCustRequestDate != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Hat??rid??">' +
                  'Hat: ' +
                  moment(row.OrdCustRequestDate).format('YYYY.MM.DD') +
                  '</span><br/>';
              }
              if (row.Szabszam != null) {
                cimkek +=
                  '<span class="unique-desc" data-toggle="m-tooltip" data-original-title="Munkasz??m">' +
                  row.Szabszam +
                  '</span>';
              }
              if (row.Prdinfo2 != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Term??k">' +
                  capitalize(row.Prdinfo2) +
                  '</span>';
              }
              //return cimkek;
              // var cimkek = row.Resztvevok.map(function(element) {
              //   if (element.ErintettsegFokaCimId == '65') {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Elk??vet??">' +
              //       capitalize(element.Nev) +
              //       '</span>'
              //     );
              //   } else if (element.ErintettsegFokaCimId == '66') {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="S??rtett">' +
              //       capitalize(element.Nev) +
              //       '</span>'
              //     );
              //   } else {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Tan??">' +
              //       capitalize(element.Nev) +
              //       '</span>'
              //     );
              //   }
              // });
              var cimkekStr = cimkek.toString().replace(/,/g, '');
              return cimkekStr;
            },
          },
          {
            mDataProp: null, // c??mk??k
            sTitle: 'Terv',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.Terv != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="R??gz??t?? szem??ly">' +
                  capitalize(row.Terv) +
                  '</span>';
              }
              if (
                row.ObsStartDate != null &&
                moment(row.ObsStartDate).format('YYYY') > '2020'
              ) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Kezd??s">' +
                  moment(row.ObsStartDate).format('YYYY.MM.DD');
                +'</span>';
              }
              if (row.Fo != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Napszak">' +
                  row.Fo +
                  '</span>';
              }
              if (row.Felulet != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esem??ny helye">' +
                  row.Felulet +
                  '</span>';
              }
              return cimkek;
            },
          },
          {
            mDataProp: null,
            sTitle: 'Rendelkez??sre ??ll?? k??szletek',
            //width: '60%',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.Lapanyag != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="R??gz??t?? szem??ly">' +
                  capitalize(row.Lapanyag) +
                  '</span>';
              }
              if (row.Elanyag != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="R??gz??t?? int??zet">' +
                  row.Elanyag +
                  '</span>';
              }
              if (row.Kellekek != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Napszak">' +
                  row.Kellekek +
                  '</span>';
              }
              if (row.Prioritas != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esem??ny helye">' +
                  row.Prioritas +
                  '</span>';
              }
              if (row.Lejart != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esem??ny helye">' +
                  row.Lejart +
                  '</span>';
              }
              if (row.KellekHiany != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-danger" data-toggle="m-tooltip" data-original-title="Esem??ny helye">' +
                  row.KellekHiany +
                  '</span>';
              }
              return cimkek;
              // return (
              //   '<span class="unique-desc">' +
              //   row.Leiras.substring(0, 120) +
              //   '</span>'
              // );
            },
          },
        ],
        responsive: false,
        deferRender: true,
        sDom: `<'row dt-panelmenu'<'col-sm-12 col-md-5  col-xl-5 'i><'col-sm-12 col-md-7 col-xl-7  text-right'<'ujuenyitesbtn'>f>>
          <'row'<'col-sm-12'tr>>
          <'row dt-panelfooter'<'col-sm-12 col-md-6 'lB><'col-sm-12 col-md-6 'p>>`,
        //buttons: ['copy', 'excel', 'pdf', 'print'],
        drawCallback: function (settings) {
          var ugyTable = '#' + settings.sTableId;
          vm.$nextTick(() => {
            vm.DrawSelectsOnDT(vm.selected);
          });
          $(ugyTable + ' tbody button:first').addClass('introJsDokumentumok');
          $(ugyTable + '_wrapper')
            .find('input')
            .attr(
              'placeholder',
              'Keres??s ??gyf??lre, megrendel??s sz??mra, d??tumokra'
            );
          $(ugyTable)
            .find('[data-toggle="m-tooltip"]')
            .each(function () {
              $(this).tooltip({
                container: $(this).closest('td'),
                delay: { show: 500, hide: 100 },
              });
            });
        },
        createdRow: function (row, data, rowIndex) {
          $(row).attr('data-id', data.PrdID);
          $(row).css('cursor', 'pointer');

          $(row)
            .find('.dt-fegyelmi-ugy-muvelet')
            .click(function (e) {
              let modalId = $(e.target).attr('data-modal-id');
              let modalTipus = $(e.target).attr('data-modal-tipus');
              let functionToRun = $(e.target).attr('data-function-to-run');
              vm.UgyReszletekMegtekintes({
                fegyelmiUgyId: data.PrdID,
                modalName: modalId,
                modalType: modalTipus,
                functionToRun: functionToRun,
                fegyelmiUgy: data,
              });
            });
          var selector = 'td:not(:last-child):not(:first-child)';
          if (vm.isArchive) {
            selector = 'td:not(:last-child)';
          }
          if (vm.isFogvKereso) {
            selector = 'td';
          }
          $(row)
            .find(selector)
            .on('click', this, function (e) {
              // if (data.Fany) {
              //   var Id = $(this).attr('data-id');
              //   var args = {};
              //   args.FegyelmiUgyId = data.FegyelmiUgyId;
              //   args.Urls = IFrameUrls.GetFanyArchiveUrl(
              //     vm.userInfo.RogzitoIntezet.Azonosito,
              //     data
              //   );
              //   if (args.Urls.length == 0) return;
              //   eventBus.$emit('Sidebar:ugyReszletek:close', {});
              //   eventBus.$emit('Sidebar:fanyFogvatartottAdatok', {
              //     state: true,
              //     data: args,
              //   });
              // } else {
              var prdId = data.PrdID;
              console.log('EsemenyId: ' + prdId);
              eventBus.$emit('Sidebar:fanyFogvatartottAdatok', {});
              vm.UgyReszletekMegtekintes({
                prdId: prdId,
                prd: data,
              });
              // }
            });
        },
        buttons: [
          {
            text: 'M??sol??s',
            extend: 'copyHtml5',
            exportOptions: {
              columns: ':visible :not(.noExport)',
            },
          },
          {
            extend: 'excelHtml5',
            text: 'Excel',

            exportOptions: {
              columns: ':visible :not(.noExport)',
              customizeData: function (data) {
                let newData = vm.GetExcelExport();
                data.header = newData.header;
                data.body = newData.body;
                data.footer = newData.footer;
              },
            },
          },
          {
            extend: 'print',
            text: 'Nyomtat??s',
          },
        ],
      };
      if (this.isArchive) {
        options.select = null;
        options.aoColumns.shift();
        options.order = [[2, 'desc']];
      }
      if (this.isFogvKereso) {
        options.select = null;
        options.aoColumns.shift();
        options.order = [[2, 'desc']];
        options.aoColumns.pop();
      }
      return options;
    },
  },
  watch: {
    selected: {
      handler: async function (curr) {
        await this.$nextTick();
        this.DrawSelectsOnDT(curr);
      },
      deep: true,
    },
  },
  components: {},
  props: {
    fegyelmiUgyek: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    isArchive: {
      type: Boolean,
      default: false,
    },
    isFogvKereso: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.ujuenyitesbtn,
.ujuenyitesbtn + .dataTables_filter {
  display: inline-block;
}
.counter-number {
  font-size: 36px;
}
</style>
