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
        // Elkövető
        {
          header: 'Fogvatarott azonosítószáma és neve',
          getCellValue(row) {
            return `${row.AktNyilvantartasiSzam} ${row.FogvatartottNev}`;
          },
        },
        {
          header: 'Fogvatartott nyilvántartási státusza',
          getCellValue(row) {
            return row.NyilvantartottStatusz || '';
          },
        },
        {
          header: 'Fogvatartott elhelyezése',
          getCellValue(row) {
            return `${row.Intezet}/${row.Elhelyezes}/${row.Korlet}/${row.Zarka}`;
          },
        },
        // Esemény
        {
          header: 'Esemény napja és ideje',
          getCellValue(row) {
            if (row.EsemenyDatuma) {
              return `${moment(row.EsemenyDatuma).format('YYYY.MM.DD. HH:mm')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Esemény jellege',
          getCellValue(row) {
            return row.Jelleg || '';
          },
        },

        // Ügy
        {
          header: 'Ügyszám',
          getCellValue(row) {
            return getUgyszam(row);
          },
        },
        {
          header: 'Ügy intézete',
          getCellValue(row) {
            return row.FegyelmiIntezet || '';
          },
        },
        {
          header: 'Elrendelés ideje',
          getCellValue(row) {
            if (row.DontesDatuma) {
              return `${moment(row.DontesDatuma).format('YYYY.MM.DD.')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Kivizsgáló személy',
          getCellValue(row) {
            return capitalize(row.Kivizsgalo) || '';
          },
        },
        {
          header: 'Elrendelő személy',
          getCellValue(row) {
            return capitalize(row.Elrendelo) || '';
          },
        },
        // Státusz
        {
          header: 'Jogszabályi határidő',
          getCellValue(row) {
            if (row.Hatarido) {
              return `${moment(row.Hatarido).format('YYYY.MM.DD.')}`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Kivizsgálási határidő',
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
          header: 'Fegyelmi ügy státusza',
          getCellValue(row) {
            return row.UgyStatusz || '';
          },
        },
        {
          header: 'Fenyítés típusa',
          getCellValue(row) {
            if (row.HatarozatJogerosFl && row.FenyitesTipus) {
              return row.FenyitesTipus;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Határidő lejárt',
          getCellValue(row) {
            if (row.Csuszas > 0) {
              return `Lejárt ${row.Csuszas} napja`;
            } else {
              return '';
            }
          },
        },
        {
          header: 'Jogi képviselet',
          getCellValue(row) {
            return excelExportCellBool(row.VanJogiKepviselet);
          },
        },
        {
          header: 'Felfüggesztési javaslat',
          getCellValue(row) {
            return excelExportCellBool(row.FelfuggesztesiJavaslat);
          },
        },
        {
          header: 'Felfüggesztve',
          getCellValue(row) {
            return excelExportCellBool(row.Felfuggesztve);
          },
        },
        {
          header: 'Határidő módosítási javaslat',
          getCellValue(row) {
            return excelExportCellBool(row.HataridoModositasJavaslat);
          },
        },
        // {
        //   header: 'Tárgyalás kitűzésre vár',
        //   getCellValue(row) {
        //     return excelExportCellBool(
        //       row.UgyStatuszId == Cimkek.FegyelmiUgyStatusza.IFokuTargyalas &&
        //         !row.ElsofokuTargyalasIdopontja
        //     );
        //   },
        // },
        // {
        //   header: 'Reintegrációból viszaküldve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.Visszakuldve);
        //   },
        // },
        // {
        //   header: 'Szállításra előjegyezve',
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
        //   header: 'Szakterületi véleményre vár',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.SzakteruletiVelemenyreVarFL);
        //   },
        // },
        // {
        //   header: 'Közvetítői eljárás kezdeményezve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.KozvetitoiEljarasKezdemenyezve);
        //   },
        // },
        // {
        //   header: 'Közvetítői eljárásban',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.KozvetitoiEljarasban);
        //   },
        // },
        // {
        //   header: 'Elkülönítve',
        //   getCellValue(row) {
        //     return excelExportCellBool(row.FegyelmiElkulonitesFL);
        //   },
        // },
        // {
        //   header: 'Jelölje ki a jogi képviselőt',
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
            mDataProp: null, // esemény
            sTitle: 'Munkaszám',
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
            mDataProp: null, // résztvevők
            sTitle: 'Megrendelés szám',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.OrdCustRequestDate != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Határidő">' +
                  'Hat: ' +
                  moment(row.OrdCustRequestDate).format('YYYY.MM.DD') +
                  '</span><br/>';
              }
              if (row.Szabszam != null) {
                cimkek +=
                  '<span class="unique-desc" data-toggle="m-tooltip" data-original-title="Munkaszám">' +
                  row.Szabszam +
                  '</span>';
              }
              if (row.Prdinfo2 != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Termék">' +
                  capitalize(row.Prdinfo2) +
                  '</span>';
              }
              //return cimkek;
              // var cimkek = row.Resztvevok.map(function(element) {
              //   if (element.ErintettsegFokaCimId == '65') {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Elkövető">' +
              //       capitalize(element.Nev) +
              //       '</span>'
              //     );
              //   } else if (element.ErintettsegFokaCimId == '66') {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Sértett">' +
              //       capitalize(element.Nev) +
              //       '</span>'
              //     );
              //   } else {
              //     return (
              //       ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Tanú">' +
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
            mDataProp: null, // címkék
            sTitle: 'Terv',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.Terv != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Rögzítő személy">' +
                  capitalize(row.Terv) +
                  '</span>';
              }
              if (
                row.ObsStartDate != null &&
                moment(row.ObsStartDate).format('YYYY') > '2020'
              ) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Kezdés">' +
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
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esemény helye">' +
                  row.Felulet +
                  '</span>';
              }
              return cimkek;
            },
          },
          {
            mDataProp: null,
            sTitle: 'Rendelkezésre álló készletek',
            //width: '60%',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.Lapanyag != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Rögzítő személy">' +
                  capitalize(row.Lapanyag) +
                  '</span>';
              }
              if (row.Elanyag != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Rögzítő intézet">' +
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
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esemény helye">' +
                  row.Prioritas +
                  '</span>';
              }
              if (row.Lejart != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Esemény helye">' +
                  row.Lejart +
                  '</span>';
              }
              if (row.KellekHiany != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-danger" data-toggle="m-tooltip" data-original-title="Esemény helye">' +
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
              'Keresés ügyfélre, megrendelés számra, dátumokra'
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
            text: 'Másolás',
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
            text: 'Nyomtatás',
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
