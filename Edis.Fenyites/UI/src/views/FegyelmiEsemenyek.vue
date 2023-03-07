<template>
  <div>
    <div class="page-header py-10 px-15 d-flex align-items-center">
      <h1 class="page-title text-dark mr-15 font-weight-normal">
        Megrendelések
      </h1>
      <span
        class="rounded-pill text-default border border-default font-size-12 px-10 py-5"
      >
        Azok a megrendelések melyek gyártásra várnak
      </span>
    </div>

    <div class="page-content pb-20 pb-sm-0 px-15">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12 pr-10">
          <div
            class="vuebar-element withheader mb-xl-0"
            ref="vuebarscroll"
            v-bar="{
              preventParentScroll: true,
              scrollThrottle: 30,
              resizeRefresh: true,
            }"
          >
            <div class="panel mb-0">
              <div
                class="panel-body badge-container-selected-wrapper p-sm-10 p-xl-20"
              >
                <transition name="fade" tag="div">
                  <div
                    class="pb-2 pb-sm-0 badge-container-selected"
                    v-show="fegyelmiUgyekSelected.length > 0"
                  >
                    <div class="panel mb-0">
                      <div class="panel-body px-4 py-2">
                        <div class="row">
                          <div class="col-10 d-flex align-items-center">
                            <transition-group
                              name="list-complete"
                              tag="div"
                              class="d-flex flex-wrap"
                            >
                              <span
                                v-for="fegyelmiUgy in fegyelmiUgyekSelected"
                                :key="fegyelmiUgy.PrdID"
                                class="list-complete-item badge badge-outline mr-2 my-1 pointer badge-ugy-selected blue-grey-500 font-italic py-0"
                              >
                                <span
                                  class="checkbox-custom checkbox-default mr-2 my-0 py-1 px-0"
                                  @click="
                                    RemoveFegyelmiUgySelected({
                                      value: fegyelmiUgy.PrdID,
                                    })
                                  "
                                >
                                  <input
                                    type="checkbox"
                                    id="inputCheckbox"
                                    name="inputCheckbox"
                                    checked
                                  />
                                  <label for="inputCheckbox"></label> </span
                                ><span
                                  class="ml-4"
                                  @click="
                                    UgyReszletekMegtekintes(
                                      fegyelmiUgy.PrdID,
                                      null,
                                      null,
                                      fegyelmiUgy
                                    )
                                  "
                                  >{{ GetUgyszam(fegyelmiUgy) }}</span
                                >
                              </span>
                            </transition-group>
                          </div>
                          <div class="col-2 text-right">
                            <b-dropdown
                              id="dropdown-dropleft"
                              dropleft
                              variant="outline-dark"
                              class="pb-0"
                              no-caret
                              v-if="fegyelmiUgyekSelectedDropdown"
                              toggle-class="btn-round btn-icon"
                              :disabled="isModalOpen"
                            >
                              <template v-slot:button-content>
                                <i
                                  class="icon wb-more-horizontal"
                                  aria-hidden="true"
                                ></i>
                              </template>
                              <b-dropdown-item-button
                                v-for="opcionalisUgyek in fegyelmiUgyekSelectedDropdown.opcionalisUgyek"
                                :key="opcionalisUgyek.Id"
                                v-on:click="
                                  UgyReszletekMegtekintesMultiple(
                                    opcionalisUgyek
                                  )
                                "
                                :disabled="
                                  !opcionalisUgyek.ModalIdToOpen &&
                                  !opcionalisUgyek.FunctionToRun
                                "
                              >
                                <span :class="[opcionalisUgyek.ColorClass]">
                                  {{ opcionalisUgyek.Text }}
                                </span>
                              </b-dropdown-item-button>
                              <b-dropdown-divider
                                v-if="
                                  fegyelmiUgyekSelectedDropdown.opcionalisUgyek
                                    .length != 0
                                "
                              ></b-dropdown-divider>
                              <b-dropdown-item-button
                                v-for="fixUgyek in fegyelmiUgyekSelectedDropdown.fixUgyek"
                                :key="fixUgyek.Id"
                                :class="[fixUgyek.ColorClass]"
                                v-on:click="
                                  UgyReszletekMegtekintesMultiple(
                                    opcionalisUgyek
                                  )
                                "
                                :disabled="
                                  !opcionalisUgyek.ModalIdToOpen &&
                                  !opcionalisUgyek.FunctionToRun
                                "
                              >
                                {{ fixUgyek.Text }}
                              </b-dropdown-item-button>
                            </b-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
                <div
                  class="szurok"
                  :style="{
                    'margin-top':
                      fegyelmiUgyekSelected.length > 0
                        ? '70px !important'
                        : '0',
                  }"
                >
                  <szuro-badgek
                    ref="szuroBadgekContainer"
                    :badgek="szurok"
                    :selected.sync="selectedSzurok"
                    mapObj="fo"
                  >
                  </szuro-badgek>
                </div>
                <div class="pt-10">
                  <esemenyek-table
                    ref="fegyTable"
                    :esemenyek="SzurtFegyelmiUgyek"
                  ></esemenyek-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="transparent-modal-bg" v-if="deferT(2)">
    <base-modal modalId="esemeny-rogzites" dialog-class="">
      <esemeny-rogzites></esemeny-rogzites>
    </base-modal>
  </div> -->
    <k-slide-panel-fegyelmi-ugy-reszletek
      ref="ugyreszletekSlidePanelRef"
      id="ugyReszletek"
    ></k-slide-panel-fegyelmi-ugy-reszletek>
    <!-- <k-slide-panel-jutalmi-ugy-reszletek
      ref="jutalmiUgyreszletekSlidePanelRef"
      id="jutalmiUgyReszletek"
    ></k-slide-panel-jutalmi-ugy-reszletek> -->
    <!-- A modalok az App.vue-ban vannak -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import moment from 'moment';
import Defer from '../mixins/Defer';
import { UserStoreTypes } from '../store/modules/user';
import { getUgyszam } from '../utils/fenyitesUtils';
import { eventBus } from '../main';
import { FegyelmiUgyStoreTypes } from '../store/modules/fegyelmiugy';
import FegyelmiUgyekTable from '../components/tables/FegyelmiUgyekTable';

import { FegyelmiUgyFunctions } from '../functions/FegyelmiUgyFunctions';
import { AppStoreTypes } from '../store/modules/app';
import StatisztikaSzurok from '../data/enums/statisztikaSzurok';
import Cimkek from '../data/enums/Cimkek';
import { ConfirmModalFunctions } from '../functions/ConfirmModalFunctions';
//import ApiService from '../services/ApiService';
import { apiService } from '../main';
import { selectDatatable } from '../utils/common';
// import { sendToSocket, GetSocketConnectionId } from '../utils/socketConnection';
import { NotificationFunctions } from '../functions/notificationFunctions';
import Intezetek from '../data/enums/intezetek';
import store from '../store';
import cloneDeep from 'lodash/cloneDeep';
import groupBy from 'lodash/groupBy';
import keyBy from 'lodash/keyBy';

export default {
  name: 'fegyelmiUgyek',
  data() {
    return {
      velemenykeresId: null,
      selectedSzurok: [],
      tempStatisztikaSzurok: [],
      delayed: false,

      toolTipOptions: {
        html: true,
        delay: { show: 500, hide: 100 },
        trigger: 'hover',
        container: '#szurok-container',
      },
    };
  },
  async mounted() {
    this.$store.dispatch(
      FegyelmiUgyStoreTypes.actions.setFegyelmiUgyekSelected,
      { value: [] }
    );
    await this.$nextTick();
    var parentwidth = $('.badge-container-selected-wrapper').width();
    $('.badge-container-selected').width(parentwidth);
    setTimeout(() => {
      this.delayed = true;
    }, 250);

    if (this.$route.query.fegyelmiugyid) {
      var fegyelmiUgy = await apiService.GetFegyelmiUgyListItemViewModelById({
        fegyelmiUgyId: this.$route.query.fegyelmiugyid,
      });
      eventBus.$emit('Sidebar:ugyReszletek', {
        state: true,
        data: {
          fegyelmiUgyId: fegyelmiUgy.FegyelmiUgyId,
          fegyelmiUgy: fegyelmiUgy,
        },
      });
      let query = Object.assign({}, this.$route.query);
      delete query.fegyelmiugyid;
      this.$router.replace({ query });
    }
  },
  methods: {
    ...mapActions({
      RemoveFegyelmiUgySelected:
        FegyelmiUgyStoreTypes.actions.removeFegyelmiUgySelected,
      SetFegyelmiUgyekSzuro:
        FegyelmiUgyStoreTypes.actions.setFegyelmiUgyekSzuro,
    }),

    GetUgyszam(f) {
      return getUgyszam(f);
    },

    GetVelemenykeres: async function ({ velemenykeresId }) {
      var result = await apiService.GetVelemenykeres({
        velemenykeresId: velemenykeresId,
      });

      return result;

      // selectDatatable(result.FegyelmiUgyek);

      // this.UgyReszletekMegtekintesMultiple({
      //   ModalIdToOpen: 'szakteruleti-velemeny',
      // });
    },

    IntezetValasztas: async function (intezetId) {
      //var socketConnectionId = GetSocketConnectionId();
      let data = [];
      apiService
        .IntezetValtas({ intezetId: intezetId, mock: true })
        .then((r) => {
          //sendToSocket('SetIntezetIdToUser', data);
        })
        .catch((err) => {
          NotificationFunctions.AjaxError({
            title: 'Hiba',
            text: 'Sikertelen intézetváltás',
            errorObj: err,
          });
        });
    },

    ToggleszuroBadge(propNev, value, displayName) {
      var idx = this.selectedSzurok.findIndex(
        (x) => x.value.szuro.propNev == propNev && x.value.Id == value
      );
      if (idx == -1) {
        let badgePropData = this.szuroProps.find((f) => f.propNev == propNev);
        if (!badgePropData) {
          console.error('Nincs szuroProp megadva: ', propNev);
          return;
        }
        let newBadge = {
          key: badgePropData.propNev + '' + value,
          value: {
            Id: value,
            Nev: displayName,
            count: 0,
            szuro: { ...badgePropData },
          },
        };
        this.selectedSzurok.push(newBadge);
      }
    },

    Contains: function (list, value) {
      return list.find((x) => x.id == value) != null;
    },
    UgyReszletekMegtekintes(fegyelmiUgyId, modalName, modalType, fegyelmiUgy) {
      var args = {
        prdId: fegyelmiUgyId,
        modalName,
        modalType,
        prd: fegyelmiUgy,
      };
      eventBus.$emit('Sidebar:ugyReszletek', {
        state: true,
        data: args,
      });
    },
    UgyReszletekMegtekintesMultiple({
      ModalIdToOpen,
      ModalType,
      Options,
      FunctionToRun,
    }) {
      let ids = this.fegyelmiUgyekSelected.map((m) => m.FegyelmiUgyId);

      var args = {
        fegyelmiUgyId: ids[0],
        fegyelmiUgyIds: ids,
        modalName: ModalIdToOpen,
        modalType: ModalType,
        functionToRun: FunctionToRun,
        fegyelmiUgy: this.fegyelmiUgyekSelected[0],
      };

      if (ModalIdToOpen == 'ugy-osszevonas') {
        if (this.fegyelmiUgyekSelected.length == 1) {
          args.fegyelmiUgyIds = null;
        }
        if (this.fegyelmiUgyekSelected.length > 1) {
          args.fegyelmiUgyId = Options.foUgy;
          args.fegyelmiUgyIds = Options.alUgyek;
        }
      }

      if (ModalIdToOpen || FunctionToRun) {
        eventBus.$emit('Sidebar:ugyReszletek', {
          state: true,
          data: args,
        });
      }
    },

    ResetSelectedBadges() {
      this.selectedUgyStatuszok = [];
    },
  },
  computed: {
    ...mapGetters({
      fegyelmiUgyek: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyek,
      userInfo: UserStoreTypes.getters.getUserInfo,
      fegyelmiUgyekSelected:
        FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSelected,
      vanJogkorGyakorloJoga: UserStoreTypes.getters.vanJogkorGyakorloJoga,
      vanReintegraciosTisztJoga:
        UserStoreTypes.getters.vanReintegraciosTisztJoga,
      isModalOpen: AppStoreTypes.getters.isModalOpen,
      fegyelmiUgyekSzuro: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSzuro,
      alkatreszKeszletek: FegyelmiUgyStoreTypes.getters.getAlkatreszKeszletek,
      // kellekKeszletek: FegyelmiUgyStoreTypes.getters.getKellekKeszletek,
      alkatreszek: FegyelmiUgyStoreTypes.getters.getAlkatreszek,
    }),
    fegyelmiUgyekModositott() {
      let fegyelmiUgyek = this.fegyelmiUgyek;
      let fegyelmiUgyekModositott =
        FegyelmiUgyFunctions.FegyelmiUgyTovabbiMezokKitoltese(fegyelmiUgyek);

      let fegyelmiUgyekSelected = this.fegyelmiUgyekSelected;
      let fegyelmiUgyekSelectedDict = keyBy(fegyelmiUgyekSelected, 'PrdID');
      let alkatreszKeszletek = keyBy(
        cloneDeep(this.alkatreszKeszletek),
        'Ottimokod'
      );
      // let kellekKeszletek = keyBy(
      //   cloneDeep(this.kellekKeszletek),
      //   'Id'
      // );
      let alkatreszek = groupBy(this.alkatreszek, 'PrdId');

      for (let i = 0; i < fegyelmiUgyekSelected.length; i++) {
        const selected = fegyelmiUgyekSelected[i];
        let szuksegesAlkatreszek = alkatreszek[selected.PrdID] || [];
        for (let i = 0; i < szuksegesAlkatreszek.length; i++) {
          const alkatresz = szuksegesAlkatreszek[i];
          let keszlet = alkatreszKeszletek[alkatresz.OttimoKod];
          if (keszlet) {
            if (alkatresz.IcgCode == 'Élanyag') {
              let db = alkatresz.OriReqQty;
              keszlet.SzabadMennyiseg -= db;
            }
            if (alkatresz.IcgCode == 'Lapanyag') {
              let db = alkatresz.TablaDb;
              keszlet.SzabadMennyiseg -= db;
            }
            if (
              alkatresz.IcgCode == 'Kellék_Ertl' ||
              alkatresz.IcgCode == 'Ertl_termékek' ||
              alkatresz.IcgCode == 'Egyéb'
            ) {
              let db = alkatresz.TablaDb;
              keszlet.SzabadMennyiseg -= db;
            }
          }
        }
      }

      for (let z = 0; z < fegyelmiUgyekModositott.length; z++) {
        const row = fegyelmiUgyekModositott[z];
        row.LapReq = 0;
        row.LapSt = 0;
        row.LapHiany = '';
        row.LapHianyFl = 0;
        row.ElReq = 0;
        row.ElSt = 0;
        row.ElHiany = '';
        row.ElHianyFl = 0;
        row.KellekReq = 0;
        row.KellekSt = 0;
        row.KellekHiany = '';
        row.KellekHianyFl = 0;
        row.MindenAlapanyagMegvan = '';
        row.MindenAlapanyagMegvanFl = 0;
        let szuksegesAlkatreszek = alkatreszek[row.PrdID] || [];
        for (let i = 0; i < szuksegesAlkatreszek.length; i++) {
          const alkatresz = szuksegesAlkatreszek[i];
          if (alkatresz.IcgCode == 'Élanyag') {
            row.ElReq++;
          }
          if (alkatresz.IcgCode == 'Lapanyag') {
            row.LapReq++;
          }
          if (
            alkatresz.IcgCode == 'Kellék_Ertl' ||
            alkatresz.IcgCode == 'Ertl_termékek' ||
            alkatresz.IcgCode == 'Egyéb'
          ) {
            row.KellekReq++;
          }
        }
      }

      for (let z = 0; z < fegyelmiUgyekModositott.length; z++) {
        const row = fegyelmiUgyekModositott[z];

        let szuksegesAlkatreszek = alkatreszek[row.PrdID] || [];
        let kivalasztva = fegyelmiUgyekSelectedDict[row.PrdID] != null;

        for (let i = 0; i < szuksegesAlkatreszek.length; i++) {
          const alkatresz = szuksegesAlkatreszek[i];
          let keszlet = alkatreszKeszletek[alkatresz.OttimoKod];
          if (keszlet) {
            //alkatresz === true
            let db = 0;
            switch (alkatresz.IcgCode) {
              case 'Élanyag':
                db = alkatresz.OriReqQty;
                if (kivalasztva) {
                  row.ElSt = row.ElReq;
                } else if (db < keszlet.SzabadMennyiseg) {
                  row.ElSt++;
                }
                break;

              case 'Lapanyag':
                db = alkatresz.TablaDb;
                if (kivalasztva) {
                  row.LapSt = row.LapReq;
                } else if (db < keszlet.SzabadMennyiseg) {
                  row.LapSt++;
                }
                break;

              default:
                db = alkatresz.OriReqQty;
                if (kivalasztva) {
                  row.KellekSt = row.KellekReq;
                } else if (db < keszlet.SzabadMennyiseg) {
                  row.KellekSt++;
                }
                break;
            }
          }
        }

        if (row.LapSt < row.LapReq) {
          row.LapHiany = 'Lapanyag hiány';
          row.LapHianyFl = 1;
        }
        if (row.ElSt < row.ElReq) {
          row.ElHiany = 'Élanyag hiány';
          row.ElHianyFl = 1;
        }
        if (row.KellekekStock < row.KellekekReq) {
          row.KellekHiany = 'Kellék hiány';
          row.KellekHianyFl = 1;
        }

        if (row.LapHianyFl + row.ElHianyFl + row.KellekHianyFl == 0) {
          row.MindenAlapanyagMegvan = 'Gyártásba kiadható';
          row.MindenAlapanyagMegvanFl = 1;
        }
      }

      return fegyelmiUgyekModositott;
    },
    fegyelmiUgyekSelectedDropdown() {
      let fegyelmiUgyMuveletekObj =
        FegyelmiUgyFunctions.GetFegyelmiUgyMuveletekAsObject(
          this.fegyelmiUgyekSelected
        );
      return fegyelmiUgyMuveletekObj;
    },
    SzurtFegyelmiUgyek: function () {
      if (!this.delayed) {
        return [];
      }

      var selectedSzurok = this.selectedSzurok.map((m) => m.value);
      var filteredList = [];
      var fegyelmiUgyekTmp = this.fegyelmiUgyekModositott.slice();
      if (
        this.fegyelmiUgyekSzuro >= 0 &&
        this.fegyelmiUgyekSzuro != StatisztikaSzurok.VegrehajtasAlatt &&
        this.fegyelmiUgyekSzuro != StatisztikaSzurok.VegrehajtasraVaro
      ) {
        fegyelmiUgyekTmp =
          FegyelmiUgyFunctions.GetFegyelmiUgyekByStatisztikaSzuro(
            fegyelmiUgyekTmp,
            this.userInfo,
            this.fegyelmiUgyekSzuro
          );

        // $(this.$refs.fegyTable.$refs.datatable.$el)
        //   .DataTable()
        //   .search('');
      }

      for (var i in fegyelmiUgyekTmp) {
        var v = fegyelmiUgyekTmp[i];
        if (FegyelmiUgyFunctions.ValidateSzurok(selectedSzurok, v)) {
          continue;
        }
        filteredList.push(v);
      }
      return filteredList;
    },
    szuroProps() {
      return FegyelmiUgyFunctions.GetRendelesekSzuroBadgek();
    },
    isBvop() {
      if (!this.userInfo) {
        return false;
      }
      return this.userInfo.RogzitoIntezet.Id == Intezetek.BVOP;
    },
    szurok() {
      if (!this.delayed) {
        return [];
      }
      let szurtFegyelmiUgyek = this.SzurtFegyelmiUgyek;
      let szuroProps = this.szuroProps;
      let selectedSzurok = this.selectedSzurok;
      let szurok = FegyelmiUgyFunctions.CreateSzurok(
        szurtFegyelmiUgyek,
        szuroProps,
        this.selectedSzurok
      );
      // eslint-disable-next-line
      this.szurokKey++;
      return szurok;
    },
    fegyelmiUgyekSelectedOsszevont() {
      if (!this.fegyelmiUgyekSelected) {
        return [];
      }
      return this.fegyelmiUgyekSelected.filter(
        (e) => e.FoFegyelmiUgyId != null
      );
    },
    fegyelmiUgyekSelectedKey() {
      return this.fegyelmiUgyekSelected.reduce(
        (acc, item) => acc + item.PrdID,
        0
      );
    },
  },
  components: {
    //FegyelmiUgyekTable: FegyelmiUgyekTable,
  },
  watch: {
    fegyelmiUgyek: {
      handler: async function (value) {
        console.log('FegyelmiUgy handler');

        if (this.$route.query.velemenykeresid) {
          console.log('Vélemény', this.$route.query.velemenykeresid);
          var result = await this.GetVelemenykeres({
            velemenykeresId: this.$route.query.velemenykeresid,
          });
          if (result.intezetId != this.userInfo.RogzitoIntezet.Id) {
            await this.IntezetValasztas(result.intezetId);
          }

          if (value.length > 0 && !this.velemenykeresId) {
            // velemenykeres hívás!
            selectDatatable(result.fegyelmiUgyek);

            this.UgyReszletekMegtekintesMultiple({
              ModalIdToOpen: 'szakteruleti-velemeny',
            });
            this.velemenykeresId = this.$route.query.velemenykeresid;
            // this.GetVelemenykeres({ velemenykeresId: this.velemenykeresId });
          }
        }
      },
      immediate: true,
    },
    fegyelmiUgyekSzuro: {
      handler: function (value) {
        this.selectedSzurok = [];
        if (value == StatisztikaSzurok.VegrehajtasAlatt) {
          this.ToggleszuroBadge(
            'UgyStatusz',
            Cimkek.FegyelmiUgyStatusza.FenyitesVegrehajtasAlatt,
            'Fenyités végrehajtás alatt'
          );
        }
        if (value == StatisztikaSzurok.VegrehajtasraVaro) {
          this.ToggleszuroBadge(
            'UgyStatusz',
            Cimkek.FegyelmiUgyStatusza.FenyitesKiszabva,
            'Fenyités kiszabva'
          );
        }
      },
      immediate: true,
    },
    selectedSzurok: {
      handler: function (value, prevValue) {
        let prev = prevValue || [];
        let deletion = prev.filter((f) => !value.some((s) => s.key == f.key));
        let addition = value.filter((f) => !prev.some((s) => s.key == f.key));
        deletion.forEach((element) => {
          if (
            (element.value.szuro.propNev == 'UgyStatusz' &&
              element.value.Id ==
                Cimkek.FegyelmiUgyStatusza.FenyitesVegrehajtasAlatt) ||
            element.value.Id == Cimkek.FegyelmiUgyStatusza.FenyitesKiszabva
          ) {
            this.SetFegyelmiUgyekSzuro({ value: StatisztikaSzurok.Nincs });
            return;
          }
        });
      },
      immediate: true,
    },
    fegyelmiUgyekSelectedKey: {
      async handler() {
        let prdIds = this.fegyelmiUgyekSelected.map((m) => m.PrdID);
        try {
          // let result = await apiService.GetGyartasiMegbizasok({ prdIds });
          // await store.dispatch(FegyelmiUgyStoreTypes.actions.setFegyelmiUgyek, {
          //   value: Object.freeze(result),
          // });
        } catch (error) {
          console.log(error);
        }
      },
    },
  },
  mixins: [Defer()],
};
</script>
<style scoped>
.szurok {
  transition: 0.5s;
}
</style>
