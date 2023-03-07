<template>
  <transition name="slidePanel">
    <div
      v-show="visible"
      v-click-outside="Hide"
      class="slidePanel slidePanel-right slidePanel-show w-p15 w-p50"
      style="overflow-y: auto"
      id="slidepanel-fegyelmi-ugy"
    >
      <div class="slidePanel-content">
        <header class="slidePanel-header px-20 py-15 bg-blue-grey-400">
          <div
            class="slidePanel-header-tabs bg-white mb-10 px-20 py-10"
            v-if="slidepanelPlusBox"
          >
            <p class="mb-0">
              Tömeges rögzítés folyamatban. Kiválasztott ügyek:
            </p>

            <div
              class="nav-tabs-horizontal nav-tabs-animate position-relative"
              data-plugin="tabs"
            >
              <div class="d-flex justify-content-between nav-tabs-container">
                <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                  <li
                    class="nav-item pointer"
                    role="presentation"
                    v-for="(fegyelmiUgySelected, idx) in fegyelmiUgyekSelected"
                    :key="fegyelmiUgySelected.FegyelmiUgyId"
                    @click="
                      UpdateFegyelmiUgyAdatok(
                        fegyelmiUgySelected.FegyelmiUgyId,
                        false
                      )
                    "
                  >
                    <a
                      :class="{ active: idx == 0 }"
                      class="nav-link pl-0 pb-1"
                      data-toggle="tab"
                      aria-controls="exampleTabsAnimateFadeOne"
                      role="tab"
                      aria-expanded="false"
                      aria-selected="false"
                      >{{ fegyelmiUgySelected.UgyIntezetAzon }}/{{
                        fegyelmiUgySelected.UgyEve
                      }}/{{ fegyelmiUgySelected.UgySzama }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="list-icon">
              <i class="wb-list"></i>
            </div>
          </div>
          <div
            class="slidePanel-actions"
            aria-label="actions"
            role="group"
            style="min-height: 40px"
          >
            <b-button
              type="button"
              class="btn btn-icon btn-pure slidePanel-close actions-top icon wb-close white py-0 px-0"
              @click="Hide()"
              variant="transparent"
              :disabled="isModalOpen"
              aria-hidden="true"
              :class="{ disabled: isModalOpen }"
            ></b-button>
          </div>
          <div v-if="fegyelmiUgy">
            <h1 class="white mb-0 slidepanel-title">
              {{ fegyelmiUgy.PrjCode + ': ' + fegyelmiUgy.Szabszam }}
              {{ fegyelmiUgy.ObsStartDate | toShortDate }}
            </h1>
            <div>
              {{ fegyelmiUgy.PrjDescription }}
            </div>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Esemény napja és ideje',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
              v-if="fegyelmiUgy.KellekHiany"
              >{{ fegyelmiUgy.KellekHiany }}</span
            >
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Határidő',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
              v-if="fegyelmiUgy.OrdCustRequestDate"
              >{{ fegyelmiUgy.OrdCustRequestDate | toShortDate }}</span
            >
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Lapanyag',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
            >
              Lapanyag: {{ fegyelmiUgy.LapSt }} / {{ fegyelmiUgy.LapReq }}
            </span>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Élanyag',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
            >
              Élanyag: {{ fegyelmiUgy.ElSt }} / {{ fegyelmiUgy.ElReq }}
            </span>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Kellék',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
            >
              Kellék: {{ fegyelmiUgy.KellekSt }} / {{ fegyelmiUgy.KellekReq }}
            </span>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Fegyelmi ügy határideje',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
              v-if="fegyelmiUgy.Elanyag"
            >
              {{ fegyelmiUgy.Elanyag }}
            </span>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Jogi képviseletet kért',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
              v-if="fegyelmiUgy.Kellekek"
            >
              {{ fegyelmiUgy.Kellekek }}
            </span>
            <span
              class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm"
              v-b-tooltip="{
                title: 'Lejárt',
                html: true,
                container: '#slidepanel-fegyelmi-ugy',
                delay: { show: 500, hide: 100 },
                trigger: 'hover',
              }"
              v-if="fegyelmiUgy.Lejart"
            >
              {{ fegyelmiUgy.Lejart }}
            </span>
          </div>
        </header>
        <div
          class="slidePanel-inner position-relative w-p100 pl-20 pr-5"
          v-if="fegyelmiUgy"
        >
          <div
            class="vuebar-element slidePanelscroll"
            v-bar="{ preventParentScroll: true, scrollThrottle: 30 }"
          >
            <div>
              <div
                class="slidePanel-inner-section border-bottom-0 pt-15 pb-40 pr-5"
              >
                <div
                  class="nav-tabs-horizontal nav-tabs-animate position-relative"
                  data-plugin="tabs"
                >
                  <div
                    class="d-flex justify-content-between nav-tabs-container"
                  >
                    <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link active pl-1"
                          data-toggle="tab"
                          href="#anyagok"
                          aria-controls="exampleTabsAnimateFadeOne"
                          role="tab"
                          aria-expanded="true"
                          aria-selected="true"
                        >
                          Anyagok
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link pl-0"
                          data-toggle="tab"
                          href="#korpusz
                          "
                          aria-controls="exampleTabsAnimateFadeOne"
                          role="tab"
                          aria-expanded="false"
                          aria-selected="false"
                        >
                          Korpuszok
                        </a>
                      </li>
                    </ul>
                    <b-dropdown
                      id="dropdown-dropleft"
                      dropleft
                      variant="dark"
                      class="pb-2 drop-cont"
                      no-caret
                      v-if="fegyelmiUgy && fegyelmiUgyMuveletekObj"
                      toggle-class="btn-round btn-icon"
                      :disabled="isModalOpen"
                    >
                      <template v-slot:button-content>
                        <i class="icon wb-plus white" aria-hidden="true"></i>
                      </template>
                      <b-dropdown-item-button
                        v-for="opcionalisUgyek in fegyelmiUgyMuveletekObj.opcionalisUgyek"
                        :key="opcionalisUgyek.Id"
                        v-on:click="
                          OpenModal(
                            opcionalisUgyek.ModalIdToOpen,
                            opcionalisUgyek.ModalType,
                            opcionalisUgyek.FunctionToRun
                          )
                        "
                        :disabled="
                          !opcionalisUgyek.ModalIdToOpen &&
                          !opcionalisUgyek.FunctionToRun
                        "
                        ><span>{{
                          opcionalisUgyek.Text
                        }}</span></b-dropdown-item-button
                      >
                      <b-dropdown-item-button
                        v-for="fixUgyek in fegyelmiUgyMuveletekObj.fixUgyek"
                        :key="fixUgyek.Id"
                        :class="[fixUgyek.ColorClass]"
                        v-on:click="
                          OpenModal(
                            fixUgyek.ModalIdToOpen,
                            fixUgyek.ModalType,
                            opcionalisUgyek.FunctionToRun
                          )
                        "
                        :disabled="
                          !fixUgyek.ModalIdToOpen &&
                          !opcionalisUgyek.FunctionToRun
                        "
                      >
                        {{ fixUgyek.Text }}</b-dropdown-item-button
                      >
                    </b-dropdown>
                  </div>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="anyagok"
                      role="tabpanel"
                    >
                      <div
                        class="panel-group panel-group-continuous"
                        id="exampleAccordionContinuous"
                        aria-multiselectable="true"
                        role="tablist"
                        v-if="!isNaploBejegyzesLoading"
                      >
                        <ul class="list-style-none list-group list-group-flush">
                          <li
                            v-for="(alkatresz, index) in alkatreszek"
                            :key="index"
                            class="d-flex flex-column list-group-item"
                          >
                            <div class="d-flex flex-row">
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span>{{ alkatresz.ItmItemNumber }}</span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-warning mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Alkatrész típus',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="alkatresz.IcgCode"
                                  >{{
                                    alkatresz.IcgCode +
                                    ': ' +
                                    alkatresz.Icg2Code
                                  }}
                                </span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Szükséges mennyiség',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="alkatresz.OriReqQty"
                                  >{{
                                    alkatresz.OriReqQty +
                                    ' ' +
                                    alkatresz.PrimaryUOMCode
                                  }}
                                </span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Szükséges tábla mennyiség',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="alkatresz.TablaDb"
                                  >{{ alkatresz.TablaDb + ' tábla' }}
                                </span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-warning mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Készlet mennyiség',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="
                                    alkatresz.SzabadMennyiseg &&
                                    alkatresz.IcgCode == 'Lapanyag'
                                  "
                                  >{{ alkatresz.SzabadMennyiseg + ' tábla' }}
                                </span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-warning mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Készlet mennyiség',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="
                                    alkatresz.SzabadMennyiseg &&
                                    alkatresz.IcgCode == 'Élanyag'
                                  "
                                  >{{
                                    alkatresz.SzabadMennyiseg +
                                    ' ' +
                                    alkatresz.PrimaryUOMCode
                                  }}
                                </span>
                              </p>
                              <p class="flex-grow-1 flex-shrink-1 px-10">
                                <span
                                  class="badge badge-outline badge-warning mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                  v-b-tooltip="{
                                    title: 'Készlet mennyiség',
                                    html: true,
                                    container: '#slidepanel-fegyelmi-ugy',
                                    delay: { show: 500, hide: 100 },
                                    trigger: 'hover',
                                  }"
                                  v-if="
                                    alkatresz.SzabadMennyiseg &&
                                    (alkatresz.IcgCode == 'Kellek_Ertl' ||
                                      alkatresz.IcgCode == 'Ertl_termékek' ||
                                      alkatresz.IcgCode == 'Egyéb')
                                  "
                                  >{{ alkatresz.SzabadMennyiseg + ' db' }}
                                </span>
                              </p>
                            </div>
                            <!-- <p class="flex-grow-1 flex-shrink-1 px-10">
                              <span
                                class="badge badge-outline badge-dark mr-5 bg-white font-weight-400 shadow-sm w-p100"
                                v-b-tooltip="{
                                  title: 'Vastagság, és színkód',
                                  html: true,
                                  container: '#slidepanel-fegyelmi-ugy',
                                  delay: { show: 500, hide: 100 },
                                  trigger: 'hover',
                                }"
                                v-if="alkatresz.ItmavValue"
                                >{{
                                  alkatresz.DimZ + 'mm, ' + alkatresz.ItmavValue
                                }}
                              </span>
                            </p></div> -->
                            <div>
                              <p
                                class="d-flex flex-column justify-content-between flex-grow-1 flex-shrink-1 px-10"
                              >
                                <span>{{ alkatresz.ItmDescription }}</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <!-- <component
                          v-for="(alkatresz, index) in alkatreszek"
                          :key="index"
                          :is="
                            GetNaplobejegyzesKomponensNev(
                              naplobejegyzes.TipusCimkeId
                            )
                          "
                          :naplobejegyzes="naplobejegyzes"
                          :fegyelmiUgy="fegyelmiUgy"
                          :esemeny="esemeny"
                        ></component>
                        <component
                          :is="GetNaplobejegyzesKomponensNev(-1)"
                          :fegyelmiUgy="fegyelmiUgy"
                          :esemeny="esemeny"
                        ></component> -->
                      </div>
                      <div v-else>
                        <div class="d-flex justify-content-center mt-4">
                          <b-spinner variant="secondary"></b-spinner>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show"
                      id="korpuszok"
                      role="tabpanel"
                    >
                      <div
                        class="panel-group panel-group-continuous"
                        id="exampleAccordionContinuous"
                        aria-multiselectable="true"
                        role="tablist"
                        v-if="!isNaploBejegyzesLoading"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <div v-else>
                        <div class="d-flex justify-content-center mt-4">
                          <b-spinner variant="secondary"></b-spinner>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        class="slidePanel-header p-15 pr-30 bg-blue-grey-400 position-fixed text-right"
      >
        <b-button
          @click="Hide()"
          class="btn-raised bg-blue-grey-600"
          :disabled="isModalOpen"
          :class="{ disabled: isModalOpen }"
          >Bezárás</b-button
        >
      </footer>
    </div>
  </transition>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import { apiService } from '../../main';
import { eventBus } from '../../main';
import settings from '../../data/settings';
import { async } from 'q';
import moment from 'moment';
import { required, minValue } from 'vuelidate/lib/validators';
import { NotificationFunctions } from '../../functions/notificationFunctions';
import { debuglog } from 'util';
import { UserStoreTypes } from '../../store/modules/user';
import { FegyelmiUgyStoreTypes } from '../../store/modules/fegyelmiugy';
import ReintegraciosTisztDontesTipus from '../../data/enums/reintegraciosTisztDontesTipus';
import { AppStoreTypes } from '../../store/modules/app';
import { FegyelmiUgyFunctions } from '../../functions/FegyelmiUgyFunctions';
import Cimkek from '../../data/enums/Cimkek';
import { NyomtatvanyFunctions } from '../../functions/nyomtatvanyFunctions';
import { ConfirmModalFunctions } from '../../functions/ConfirmModalFunctions';
import { timeout } from '../../utils/common';
export default {
  name: 'k-slide-panel-fegyelmi-ugy-reszletek',
  props: ['id'],
  data: function () {
    return {
      prdId: 0,
      fegyelmiUgyIds: [],
      fegyelmiUgy: null,
      fegyelmiUgyElrendelesModalId: null,
      visible: false,
      canClose: true,
      isActive: false,
      isLoading: false,
      isNaploBejegyzesLoading: false,
      alkatreszek: [],
      esemeny: null,
      osszevontesemenyek: [], //TODO
    };
  },
  mounted: function () {
    console.log('Sidebar:' + this.id);
    eventBus.$on('Sidebar:' + this.id, this.OnSidebarOpen);
    eventBus.$on('Sidebar:' + this.id + ':refresh', this.OnSideBarRefresh);
    eventBus.$on(
      'Sidebar:' + this.id + ':dokumentumokRefresh',
      this.OnDokumentumokRefresh
    );
    eventBus.$on('Sidebar:' + this.id + ':close', this.Hide);
  },
  beforeDestroy() {
    eventBus.$off('Sidebar:' + this.id, this.OnSidebarOpen);
    eventBus.$off('Sidebar:' + this.id + ':refresh', this.OnSideBarRefresh);
    eventBus.$off(
      'Sidebar:' + this.id + ':dokumentumokRefresh',
      this.OnDokumentumokRefresh
    );
    eventBus.$off('Sidebar:' + this.id + ':close', this.Hide);
  },
  methods: {
    ...mapActions({
      setStateVuex: AppStoreTypes.actions.setSlidePanelFegyelmiUgyReszletekOpen,
    }),
    async OnSidebarOpen({ state, data }) {
      console.log(state, data);
      if (state) {
        data.fegyelmiUgyIds = data.fegyelmiUgyIds || [];
        console.log(
          `Sidebar prdId: ${data.prdId}, Ids: ${data.fegyelmiUgyIds.join(
            ', '
          )}`,
          data
        );
        data.fegyelmiUgyIds = data.fegyelmiUgyIds || [];
        this.fegyelmiUgy = data.prd;
        this.prdId = data.prdId;
        this.fegyelmiUgyIds = data.fegyelmiUgyIds;
        if (data.fegyelmiUgyIds && !data.prdId) {
          this.prdId = data.fegyelmiUgyIds[0];
        }
        if (!data.fegyelmiUgyIds || data.fegyelmiUgyIds.length == 0) {
          this.fegyelmiUgyIds = [data.prdId];
        }
        let canModalOpen = await FegyelmiUgyFunctions.CanModalOpen(
          data.modalName,
          { fegyelmiUgyIds: this.fegyelmiUgyIds }
        );
        if (!canModalOpen) {
          return;
        }
        this.LoadFegyelmiUgyAdatok(data.prdId);
        //this.LoadOsszevontFegyelmiUgyek(this.prdId);
        if (data.modalName || data.functionToRun) {
          this.OpenModal(
            data.modalName,
            data.modalType,
            data.functionToRun,
            true
          );
        }
      } else {
        console.log('Sidebar:ugyReszletek Hide');
        this.Hide();
      }
    },
    async OnSideBarRefresh() {
      console.log('Sidebar:' + this.id + ':refresh', this.prdId);
      let id = this.prdId;
      await timeout(250);
      this.UpdateFegyelmiUgyAdatok(id);
    },
    async OnDokumentumokRefresh() {
      if (this.$refs.iktatottNyomtatvanyokTable) {
        this.$refs.iktatottNyomtatvanyokTable.GetDokumentumok(this.prdId);
      }
    },
    async OpenModal(
      modalName,
      modalType,
      functionToRun,
      modalOpenChecked = false
    ) {
      console.log('OpenModal');
      var args = {
        prdId: this.prdId, // ToDo: hotfix, később kiszedni
        fegyelmiUgyIds: this.fegyelmiUgyIds,
        modalType,
      };
      if (!modalOpenChecked) {
        let canModalOpen = await FegyelmiUgyFunctions.CanModalOpen(modalName, {
          fegyelmiUgyIds: this.fegyelmiUgyIds,
        });
        if (!canModalOpen) {
          return;
        }
      }
      if (modalName) {
        eventBus.$emit('Modal:' + modalName, {
          state: true,
          data: args,
        });
      } else if (ConfirmModalFunctions[functionToRun] != null) {
        ConfirmModalFunctions[functionToRun](this.fegyelmiUgyIds);
      } else {
        throw 'OpenModal - Nincs megadva modalName vagy functionToRun paraméter.';
      }
    },
    /*FanyCategory: function(event) {
        this.isActive = true;
      },*/
    LoadFegyelmiUgyAdatok: async function (prdId) {
      this.isNaploBejegyzesLoading = true;
      try {
        this.Show(prdId);
        this.alkatreszek = [];
        this.esemeny = null;
        // if (this.$refs.iktatottNyomtatvanyokTable) {
        //   this.$refs.iktatottNyomtatvanyokTable.GetDokumentumok(prdId);
        // }
        let result = await apiService.GetAlkatreszekByPrdId({
          prdId,
        });
        // this.alkatreszek = result.alkatreszek;
        this.alkatreszek = result.alkatreszek;

        this.isNaploBejegyzesLoading = false;
      } catch (err) {
        let isAbort = NotificationFunctions.AjaxError({
          title: 'Hiba',
          text: 'Adatok lekérdezése sikertelen',
          errorObj: err,
        });
        this.isNaploBejegyzesLoading = isAbort;
        console.log(err);
      }
    },
    LoadOsszevontFegyelmiUgyek: async function (prdId) {
      try {
        this.osszevontesemenyek = [];
        let result = await apiService.GetOsszevontFegyelmiUgyekForFegyelmiUgy({
          prdId,
        });
        this.osszevontesemenyek = result;
      } catch (err) {
        let isAbort = NotificationFunctions.AjaxError({
          title: 'Hiba',
          text: 'Összevont ügyek lekérdezése sikertelen',
          errorObj: err,
        });
        console.log(err);
      }
    },
    async GetFegyelmiUgyFromServer(prdId) {
      try {
        let result = await apiService.GetFegyelmiUgyListItemViewModelById({
          prdId,
        });
        this.fegyelmiUgy = result;
      } catch (errorObj) {
        NotificationFunctions.AjaxError({
          title: 'Hiba',
          text: 'Adatok lekérdezése sikertelen',
          errorObj,
        });
        console.log(errorObj);
      }
    },
    Show: function () {
      //this.url = url;
      this.visible = true;
      this.canClose = false;
      $('a[href="#anyagok"]').trigger('click');
      this.setStateVuex({ value: true });
      setTimeout(() => {
        this.canClose = true;
      }, 350);
    },
    Hide: function () {
      //debugger;
      if (!this.canClose) {
        return;
      }
      if (this.visible) {
        $('.dataTable tr.active').removeClass('active');
      }
      this.setStateVuex({ value: false });
      this.visible = false;
      this.isActive = false;
      if (this.$v) {
        this.$v.$reset();
      }
    },
    StartLoader: function () {
      this.isLoading = true;
    },
    EndLoader: function () {
      this.isLoading = false;
    },
    OpenFegyelmiUgyElrendelesModal(id) {
      console.log('OpenFegyelmiUgyElrendelesModal', id);
      this.fegyelmiUgyElrendelesModalId = id;
      this.$root.$emit('bv::show::modal', 'fegyelmi-ugy-elrendelese');
    },
    OpenReintegraciosTisztDonteseModal(tipus) {
      let dontesTipus = 1;
      switch (tipus) {
        case 'feddes':
          dontesTipus = ReintegraciosTisztDontesTipus.Feddes;
          break;
        case 'visszakuldes':
          dontesTipus = ReintegraciosTisztDontesTipus.Visszakuldes;
          break;
        case 'kioktatas':
          dontesTipus = ReintegraciosTisztDontesTipus.Kioktatas;
          break;

        default:
          break;
      }
      this.OpenModal('reintegracios-tiszt-dontese', dontesTipus);
    },
    GetNaplobejegyzesKomponensNev(ugyTipus) {
      switch (parseInt(ugyTipus)) {
        case Cimkek.NaploTipus.SzabadszovegesNaplobejegyzes:
          return 'szabadszavas-fegyelmi-naplobejegyzes';
        default:
          console.error(`Ügytípushoz nem található komponens: ${ugyTipus}`);
          return null;
      }
    },
    UpdateFegyelmiUgyAdatok(id, updateFromServer = true) {
      this.LoadFegyelmiUgyAdatok(id);

      if (updateFromServer) {
        //console.log('updateFromServer', id);
        this.GetFegyelmiUgyFromServer(id);
      } else {
        this.fegyelmiUgy = this.fegyelmiUgyek.filter(
          (x) => x.FegyelmiUgyId == id
        )[0];
        this.prdId = id;
        //console.log('nem updateFromServer', this.fegyelmiUgy);
      }
      this.LoadOsszevontFegyelmiUgyek(id);
    },
    IktatottNyomtatvanyokTabClick: function () {
      this.OnDokumentumokRefresh();
    },
    CsatolmanyokTabClick: function () {},
  },
  computed: {
    ...mapGetters({
      fegyelmiUgyek: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyek,
      // fegyelmiUgyek: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyek,
      // dokumentumok: AppStoreTypes.getters.getDokumentumok,
      // vedoDokumentumok: AppStoreTypes.getters.getVedoDokumentumok,
      isModalOpen: AppStoreTypes.getters.isModalOpen,
      userInfo: UserStoreTypes.getters.getUserInfo,
      fegyelmiUgyekSelected:
        FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSelected,
    }),
    getHatarido() {
      if (this.fegyelmiUgy == null) return null;

      if (
        this.fegyelmiUgy.UgyStatuszId ==
          Cimkek.FegyelmiUgyStatusza.ReintegraciosTisztiJogkorben ||
        this.fegyelmiUgy.UgyStatuszId ==
          Cimkek.FegyelmiUgyStatusza.KivizsgalasFolyamatban
      ) {
        return this.fegyelmiUgy.KivizsgalasiHatarido;
      } else {
        return this.fegyelmiUgy.Hatarido;
      }
    },
    isTargyalasraVar() {
      if (!this.fegyelmiUgy) {
        return false;
      }
      return (
        (this.fegyelmiUgy.UgyStatusz == Cimkek.FegyelmiUgyStatusza &&
          !this.fegyelmiugy.ElsofokuTargyalasIdopontja) ||
        (this.fegyelmiUgy.UgyStatuszId ==
          Cimkek.FegyelmiUgyStatusza.IIFokuTargyalas &&
          !this.fegyelmiUgy.MasodfokuTargyalasIdopontja)
      );
    },
    fegyelmiUgyMuveletekObj() {
      if (!this.fegyelmiUgy) {
        return null;
      }
      let fegyelmiUgyMuveletekObj =
        FegyelmiUgyFunctions.GetFegyelmiUgyMuveletekAsObject([
          this.fegyelmiUgy,
        ]);
      return fegyelmiUgyMuveletekObj;
    },
    feltoltesek() {
      if (!this.esemeny) {
        return [];
      }
      return this.esemeny.Feltoltesek;
    },
    slidepanelPlusBox() {
      if (!this.fegyelmiUgyIds) return false;
      if (this.fegyelmiUgyIds.length > 1) return true;
      return false;
      //return this.fegyelmiUgyekSelected.some(
      //  f => f.FegyelmiUgyId == this.prdId
      //);
    },
    //prdId() {
    //  if (!this.fegyelmiUgy) {
    //    return null;
    //  }

    //  return this.fegyelmiUgy.FegyelmiUgyId;
    //},
    toltottIdoSzazalekbanInt() {
      if (this.fegyelmiUgy && this.fegyelmiUgy.ToltottIdoSzazalekban) {
        return parseInt(this.fegyelmiUgy.ToltottIdoSzazalekban, 10);
      }
      return 0;
    },
  },
  watch: {
    isActive: {
      handler: function (value) {
        if (value) {
          //this.StartLoader();
        }
      },
      immediate: true,
    },
    prdId: {
      handler: function (value) {
        if (value) {
        }
      },
      immediate: true,
    },
  },
  destroyed: function () {},
};
</script>
<style scoped>
.slide-overlay {
  background: #92929257;
  position: fixed;
  left: 0;
  z-index: 999;
  transition: background-color 0.5s ease;
}

.page-header {
  position: relative;
  padding: 30px 30px;
  margin-top: 0;
  margin-bottom: 0;
  background: transparent;
  border-bottom: 0;
}

.slidePanel {
  width: 700px !important;
}

.slidePanel-enter-active {
  transition: all 0.5s;
}

.slidePanel-leave-active {
  transition: all 0.5s;
}

.slidePanel-enter,
.slidePanel-leave-to {
  transform: translateX(100%);
}

.slidePanelOverlay-enter-active {
  transition: all 0.5s;
}

.slidePanelOverlay-leave-active {
  transition: all 0.5s;
}

.slidePanelOverlay-enter,
.slidePanelOverlay-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slidePanel-content {
  height: 100%;
}

.slidePanel header {
  z-index: 99;
  position: sticky;
  top: 0;
}
.slidePanel footer {
  bottom: 0;
  width: 700px;
}

.slidePanel .list-group li:last-child {
  margin-bottom: 25px;
}

.slidePanel .popover button.close {
  opacity: 1;
}

.avatar {
  width: 120px;
}

.progress-bar {
  background-color: rgba(118, 131, 143, 0.9);
}
.progress-xs {
  height: 4px !important;
  border-radius: 1px;
}

.nav-tabs-line .nav-link.active,
.nav-tabs-line .nav-link.active:hover,
.nav-tabs-line .nav-link.active:focus,
.nav-tabs-line .nav-item.show .nav-link,
.nav-tabs-line .nav-item.show .nav-link:hover,
.nav-tabs-line .nav-item.show .nav-link:focus,
.nav-tabs-line .nav-item.open .nav-link,
.nav-tabs-line .nav-item.open .nav-link:hover,
.nav-tabs-line .nav-item.open .nav-link:focus {
  color: #8349f5;
  background-color: transparent;
  border-bottom: 2px solid #8349f5;
}
í .nav-tabs-horizontal .dropdown {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 2;
}
.slidePanel-header-tabs {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  margin-left: -20px;
  position: relative;
}
.slidePanel-header-tabs p {
  color: #c79d1a;
  font-size: 16px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
.slidePanel-header-tabs .nav-item a {
  font-size: 12px;
}
.slidePanel-header-tabs .nav-item .active,
.slidePanel-header-tabs .nav-item .active:hover {
  color: #c79d1a;
}
.slidePanel-header-tabs .list-icon {
  position: absolute;
  left: -20px;
  bottom: 0;
}
@media (max-width: 1200px) and (min-width: 1000px) {
  .slidePanel {
    width: 540px !important;
    -webkit-transition: width 1s;
    transition: width 1s;
  }
  .slidePanel footer {
    bottom: 0;
    width: 540px;
    -webkit-transition: width 1s;
    transition: width 1s;
  }
}
</style>
