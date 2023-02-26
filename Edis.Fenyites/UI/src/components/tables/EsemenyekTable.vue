<template>
  <k-datatable
    id="FegyemiEsemenyekDataTable"
    :options="esemenyDatatableOptions"
    :dataList="esemenyek"
    :dataKey="'PrdID'"
    class="pointer table-hover fenyitesek-dt"
    ref="datatable"
  >
    <tfoot></tfoot>
  </k-datatable>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import $ from 'jquery';
import { eventBus } from '../../main';
import store from '../../store';
import { UserStoreTypes } from '../../store/modules/user';
import { NyomtatvanyFunctions } from '../../functions/nyomtatvanyFunctions';
import { FegyelmiUgyFunctions } from '../../functions/FegyelmiUgyFunctions';
import {
  timeout,
  excelExportCellBool,
  removeAllHtmlFromString,
} from '../../utils/common';

export default {
  name: 'esemenyek-table',
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    FegyelmiLapNyomtatas(prdId) {
      try {
        var fegyelmiUgyIds =
          FegyelmiUgyFunctions.GetFegyelmiUgyIdsByEsemenyId(prdId);
        NyomtatvanyFunctions.FegyelmiLapokNyomtatasa({
          fegyelmiUgyIds: fegyelmiUgyIds,
        });
      } catch (e) {
        throw 'Nincsenek fegyelmi ügyek még az eseményhez';
      }
    },
    AlairasMegtagadasaNyomtatas(prdId) {
      try {
        var fegyelmiUgyIds =
          FegyelmiUgyFunctions.GetFegyelmiUgyIdsByEsemenyId(prdId);
        fegyelmiUgyIds.forEach((x) =>
          NyomtatvanyFunctions.AlairasMegtagadasaNyomtatvany({
            fegyelmiUgyId: x,
          })
        );
      } catch (e) {
        throw 'Nincsenek fegyelmi ügyek még az eseményhez';
      }
    },
    async EsemenyMegtekintes(prdId) {
      var args = {
        prdId: prdId,
      };
      eventBus.$emit('Sidebar:ugyReszletek', {
        state: true,
        data: args,
      });
    },
    GetExcelExport() {
      let capitalize = this.$options.filters.camelCaseString;
      let esemenyek = Array.from(
        $(this.$refs.datatable.$el)
          .DataTable()
          .rows({ search: 'applied' })
          .data()
      );
      let exportData = [
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
        {
          header: 'Elkövetők',
          getCellValue(row) {
            if (row.Resztvevok) {
              let elkovetok = row.Resztvevok.filter(
                (f) => f.ErintettsegFokaCimId == '65'
              ).map((m) => capitalize(m.Nev));
              return elkovetok.join(', ');
            } else {
              return '';
            }
          },
        },
        {
          header: 'Sértettek',
          getCellValue(row) {
            if (row.Resztvevok) {
              let elkovetok = row.Resztvevok.filter(
                (f) => f.ErintettsegFokaCimId == '66'
              ).map((m) => capitalize(m.Nev));
              return elkovetok.join(', ');
            } else {
              return '';
            }
          },
        },
        {
          header: 'Tanúk',
          getCellValue(row) {
            if (row.Resztvevok) {
              let elkovetok = row.Resztvevok.filter(
                (f) =>
                  f.ErintettsegFokaCimId != '65' &&
                  f.ErintettsegFokaCimId != '66'
              ).map((m) => capitalize(m.Nev));
              return elkovetok.join(', ');
            } else {
              return '';
            }
          },
        },
        {
          header: 'Rögzítő személy',
          getCellValue(row) {
            return capitalize(row.RogzitoSzemely) || '';
          },
        },
        {
          header: 'Rögzítő intézet',
          getCellValue(row) {
            return row.RogzitoIntezet || '';
          },
        },
        {
          header: 'Napszak',
          getCellValue(row) {
            return row.Napszak || '';
          },
        },
        {
          header: 'Hely',
          getCellValue(row) {
            return row.Hely || '';
          },
        },
        {
          header: 'Leírás',
          getCellValue(row) {
            return removeAllHtmlFromString(row.Leiras) || '';
          },
        },
      ];
      let body = [];
      let footer = null;
      esemenyek.forEach((row) => {
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
      vanJogosultsaga: UserStoreTypes.getters.vanJogosultsaga,
      vanReintegraciosTisztJoga:
        UserStoreTypes.getters.vanReintegraciosTisztJoga,
      vanEgyebSzakteruletJoga: UserStoreTypes.getters.vanEgyebSzakteruletJoga,
    }),

    esemenyDatatableOptions() {
      var vm = this;
      let capitalize = vm.$options.filters.camelCaseString;
      var options = {
        aoColumns: [
          {
            mDataProp: null, // esemény
            sTitle: 'Munkaszám',
            width: '20%',
            mRender: function (data, type, row, meta) {
              var prjCode = '';
              if (row.PrjCode != null) {
                prjCode +=
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
                  ' <span class="badge text-break badge-outline badge-warning" data-toggle="m-tooltip" data-original-title="Terv">' +
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
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Fő">' +
                  row.Fo +
                  '</span>';
              }
              if (row.Felulet != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-default" data-toggle="m-tooltip" data-original-title="Felület">' +
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
              if (row.Kellekhiany != null) {
                cimkek +=
                  ' <span class="badge text-break badge-outline badge-danger" data-toggle="m-tooltip" data-original-title="Esemény helye">' +
                  row.Kellekhiany +
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
        initComplete: function initComplete() {},
        drawCallback: function (settings) {
          // $('#DataTables_Table_0 tbody button:first').addClass(
          //   'introJsDokumentumok'
          // );
          var esemenyTable = '#' + settings.sTableId;
          $(esemenyTable)
            .find('[data-toggle="m-tooltip"]')
            .each(function () {
              $(this).tooltip({
                container: $(this).closest('td'),
                delay: { show: 500, hide: 100 },
              });
            });
          $(esemenyTable + '_filter')
            .find('input')
            .attr('placeholder', 'Keresés ügyre, ügyfélre, címkékre');
        },
        createdRow: function (row, data, rowIndex) {
          $(row).attr('data-id', data.PrdID);
          $(row).css('cursor', 'pointer');

          $(row)
            .find('.dt-fegyelmi-esemeny-muvelet')
            .click(function (e) {
              // let modalId = $(e.target).attr('data-modal-id');
              // let modalTipus = $(e.target).attr('data-modal-tipus');
              let functionToRun = $(e.target).attr('data-function-to-run');
              // vm.UgyReszletekMegtekintes({
              //   fegyelmiUgyId: data.FegyelmiUgyId,
              //   modalName: modalId,
              //   modalType: modalTipus,
              //   functionToRun: functionToRun,
              //   fegyelmiUgy: data,
              // });
              if (functionToRun == 'FegyelmiLapNyomtatas') {
                vm.FegyelmiLapNyomtatas(data.PrdID);
              }
              if (functionToRun == 'AlairasMegtagadasaNyomtatas') {
                vm.AlairasMegtagadasaNyomtatas(data.PrdID);
              }
              return;
            });
          var selector = 'td:not(:last-child):not(:first-child)';
          // if (vm.isArchive) {
          //   selector = 'td:not(:last-child)';
          // }
          // if (vm.isFogvKereso) {
          //   selector = 'td';
          // }

          $(row)
            .find(selector)
            //.find('td:not(.dt-td-noClick)')
            .on('click', this, function (e) {
              var prdId = data.PrdID; // $(this).attr('data-id');
              console.log('EsemenyId: ' + prdId);
              // var args = {};
              // args.EsemenyId = data.EsemenyId;
              // args.Urls = IFrameUrls.GetFanyUrl(vm.userInfo.IntezetAzon, data);
              // if (args.Urls.length == 0) return;
              // eventBus.$emit('Sidebar:fanyFogvatartottAdatok', {
              //   state: true,
              //   data: args,
              // });

              vm.$emit('input', prdId);
              vm.EsemenyMegtekintes(prdId);
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
      return options;
    },
  },
  watch: {},
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
  },
};
</script>
