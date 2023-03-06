<template>
  <div id="app">
    <jfk-header></jfk-header>
    <component :is="layout">
      <router-view></router-view>
    </component>
    <div class="transparent-modal-bg">
      <div v-if="deferT(2)">
        <base-modal modalId="szabadszoveges-naplobejegyzes-rogzitese">
          <szabadszoveges-naplobejegyzes-rogzitese></szabadszoveges-naplobejegyzes-rogzitese>
        </base-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService, eventBus } from './main';
import JfkHeader from './components/layout/JfkHeader.vue';
import DeferMixin from './mixins/Defer';
import store from './store';
import { AppStoreTypes } from './store/modules/app';
import { timeout } from './utils/common';
import { FegyelmiUgyFunctions } from './functions/FegyelmiUgyFunctions';
const default_layout = 'default';

export default {
  name: 'app',
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    },
  },
  created() {
    this.$root.$on('bv::modal::show', this.SetModalOpenTrue);
    this.$root.$on('bv::modal::hide', this.SetModalOpenFalse);
  },
  beforeDestroy() {
    this.$root.$off('bv::modal::show', this.SetModalOpenTrue);
    this.$root.$off('bv::modal::hide', this.SetModalOpenFalse);
  },
  mounted() {
    this.GetAdatok();
    eventBus.$on('IntezetValasztas', () => {
      this.AdatokFrissitese();
    });
    eventBus.$on('alkatreszek-frissitese', () => {
      apiService.GetAlkatreszek();
    });
    eventBus.$on('alkatresz-keszletek-frissites', () => {
      apiService.GetAlkatreszKeszletek();
    });
  },
  methods: {
    async GetAdatok() {
      //await apiService.GetFenyitesek();
      await timeout(1000);
      await apiService.RefreshAktivitasFolyam();
    },
    async AdatokFrissitese() {
      //await timeout(500);
      await Promise.all([
        apiService.GetFegyelmiUgyek(),
        apiService.GetJutalomUgyek(),
      ]);
      await timeout(1000);
      await apiService.GetEsemenyek();
      await timeout(1000);
      //await apiService.GetFenyitesek();
      //await timeout(1000);
      await apiService.RefreshAktivitasFolyam();
    },
    SetModalOpenTrue() {
      store.dispatch(AppStoreTypes.actions.setModalOpen, { value: true });
    },
    SetModalOpenFalse() {
      store.dispatch(AppStoreTypes.actions.setModalOpen, { value: false });
    },
  },
  components: {
    JfkHeader,
  },
  mixins: [DeferMixin()],
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
