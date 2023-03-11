<template>
  <div>
    <k-datatable
      id="FegyemiUgyekDataTable"
      :options="fegyelmiUgyDatatableOptions"
      :dataList="esemenyek"
      :dataKey="'PrdID'"
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
import { FegyelmiUgyStoreTypes } from '../../store/modules/fegyelmiugy';
import { UserStoreTypes } from '../../store/modules/user';
import Intezetek from '../../data/enums/intezetek';
import { excelExportCellBool } from '../../utils/common';

export default {
  name: 'esemenyek-table',
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
        {
          header: 'Munkaszám',
          getCellValue(row) {
            return row.PrjCode || '';
          },
        },
        {
          header: 'Vevő',
          getCellValue(row) {
            return row.PrjDescription || '';
          },
        },
        {
          header: 'Munkaszám',
          getCellValue(row) {
            return row.Szabszam;
          },
        },
        {
          header: 'Termék',
          getCellValue(row) {
            return row.Prdinfo2;
          },
        },
        {
          header: 'Kezdés',
          getCellValue(row) {
            if (row.ObsStartDate) {
              return moment(row.ObsStartDate).format('YYYY.MM.DD');
            } else {
              return '';
            }
          },
        },
        {
          header: 'Határidő',
          getCellValue(row) {
            if (row.OrdCustRequestDate) {
              return moment(row.OrdCustRequestDate).format('YYYY.MM.DD.');
            } else {
              return '';
            }
          },
        },
        {
          header: 'Lapanyag',
          getCellValue(row) {
            return `${row.LapSt}/${row.LapReq}`;
          },
        },
        {
          header: 'Élanyag',
          getCellValue(row) {
            return `${row.ElSt}/${row.ElReq}`;
          },
        },
        {
          header: 'Kellék',
          getCellValue(row) {
            return `${row.KellekSt}/${row.KellekReq}`;
          },
        },
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
              if (!vm.selected.includes(row.PrdID)) {
                vm.AddFegyelmiUgySelected({ value: row.PrdID });
              }
            });
          $(vm.$refs.datatable.$el)
            .DataTable()
            .on('deselect', function (e, dt, type, indexes) {
              var row = dt.rows(indexes).data()[0];
              if (vm.selected.includes(row.PrdID)) {
                vm.RemoveFegyelmiUgySelected({ value: row.PrdID });
              }
            });
        },
        select: {
          style: 'multiple',
          selector: 'td:first-child',
        },
        order: [[3, 'desc']],
        pageLength: 50,
        bSortClasses: false,
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
              var cimkek = '';
              if (row.PrjCode != null) {
                cimkek +=
                  '<span class="unique-desc"><b><i>' +
                  row.PrjCode +
                  '</i></b></span>';
              }
              if (row.PrjDescription != null) {
                cimkek +=
                  '<span class="unique-desc" data-toggle="m-tooltip" data-original-title="Vevő">' +
                  '<br/>' +
                  row.PrjDescription +
                  '</span>';
              }
              return cimkek;
            },
          },
          {
            mDataProp: null, // résztvevők
            sTitle: 'Megrendelés szám',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

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
              var cimkekStr = cimkek.toString().replace(/,/g, '');
              return cimkekStr;
            },
          },
          {
            mDataProp: null, // címkék
            sTitle: 'Dátumok',
            mRender: function (data, type, row, meta) {
              var cimkek = '';

              if (row.Terv != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Rögzítő személy">' +
                  capitalize(row.Terv) +
                  '</span>';
              }
              if (row.OrdCustRequestDate != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Határidő">' +
                  'Hat: ' +
                  moment(row.OrdCustRequestDate).format('YYYY.MM.DD') +
                  '</span><br/>';
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
              return cimkek;
            },
          },
          {
            mDataProp: null,
            sTitle: 'Rendelkezésre álló készletek',
            //width: '60%',
            mRender: function (data, type, row, meta) {
              var cimkek =
                '<div class="d-flex justify-content-between align-items-start">';
              cimkek += `<div>
                    Lapanyag: ${row.LapSt}/${row.LapReq} <span class="text-danger">${row.LapHiany}</span>
                    <br/>
                    Élanyag : ${row.ElSt}/${row.ElReq} <span class="text-danger">${row.ElHiany}</span>
                    <br/>
                    Kellék : ${row.KellekSt}/${row.KellekReq} <span class="text-danger">${row.KellekHiany}</span>
                    </div>`;
              //row.LapHiany = 'Lapanyag hiány';
              //row.ElHiany = 'Élanyag hiány';
              //row.KellekHiany = 'Laphiány';
              //row.MindenAlapanyagMegvan = 'Gyártásba kiadható';
              cimkek += '<div>';
              if (row.MindenAlapanyagMegvan != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Gyártható" style="text-align:right;vertical-align: text-top">' +
                  row.MindenAlapanyagMegvan +
                  '</span>';
              }
              cimkek += '</div>';

              return cimkek + '</div>';
              // return (
              //   '<span class="unique-desc">' +
              //   row.Leiras.substring(0, 120) +
              //   '</span>'
              // );
            },
          },
          {
            mDataProp: null,
            sTitle: '',
            bSearchable: false,
            bSortable: false,
            sClass: 'dt-td-center dt-td-noClick',
            sWidth: '55px',
            mRender: function (data, type, row, meta) {
              //if (row.FoFegyelmiUgyId) {
              //  return '';
              //}
              var dropdown =
                FegyelmiUgyFunctions.GetBootstrapEsemenyMuveletekMenu([data]);
              if (!dropdown) {
                return '';
              }
              return dropdown;
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
          if (data.KellekHiany) {
            // $(row).addClass('row-warning');
          }

          $(row)
            .find('.dt-fegyelmi-esemeny-muvelet')
            .click(function (e) {
              let modalId = $(e.target).attr('data-modal-id');
              let modalTipus = $(e.target).attr('data-modal-tipus');
              let functionToRun = $(e.target).attr('data-function-to-run');
              vm.UgyReszletekMegtekintes({
                prdId: data.PrdID,
                modalName: modalId,
                modalType: modalTipus,
                functionToRun: functionToRun,
                prd: data,
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
    esemenyek: {
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
