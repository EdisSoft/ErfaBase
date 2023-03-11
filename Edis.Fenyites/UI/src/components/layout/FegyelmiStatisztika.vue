<template>
  <div class="page-aside-right">
    <div class="page-header py-10 px-15 d-flex align-items-center">
      <h1 class="page-title text-dark mr-15 font-weight-normal">&nbsp;</h1>
    </div>
    <div class="card">
      <div
        id="statisztika"
        class="vuebar-element withheader right-numbers py-2"
        ref="vuebarscroll"
        v-bar="{
          preventParentScroll: true,
          scrollThrottle: 30,
          resizeRefresh: true,
        }"
      >
        <div>
          <div
            class="card-block p-10 border-0"
            :class="{ 'card-selected': data.isSelected }"
            @click="SelectStatisztika(data.szuro)"
            v-for="data in statisztika"
            :key="data.title"
          >
            <div class="card-block-inner">
              <div class="counter counter-lg">
                <span class="counter-number text-warning">
                  <k-animated-number
                    :value="data.array.length"
                  ></k-animated-number
                ></span>
                <div class="counter-label">{{ data.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FegyelmiUgyStoreTypes } from '../../store/modules/fegyelmiugy';
import Cimkek from '../../data/enums/Cimkek';
import { UserStoreTypes, jogosultsagok } from '../../store/modules/user';
import { dateSameDay } from '../../utils/date';
import { FegyelmiUgyFunctions } from '../../functions/FegyelmiUgyFunctions';
import StatisztikaSzurok from '../../data/enums/statisztikaSzurok';

export default {
  name: 'fegyelmi-statisztika',
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      SetFegyelmiUgyekSzuro:
        FegyelmiUgyStoreTypes.actions.setFegyelmiUgyekSzuro,
    }),
    SelectStatisztika(value) {
      if (this.$route.name != 'FegyelmiEsemenyek') {
        setTimeout(() => {
          this.$router.push({ name: 'FegyelmiEsemenyek' });
        }, 350);
      }
      this.SetFegyelmiUgyekSzuro({ value });
    },
  },
  computed: {
    ...mapGetters({
      fegyelmiUgyek: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyek,
      getFegyelmiUgyekSzamolt:
        FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSzamolt,
      user: UserStoreTypes.getters.getUserInfo,
      fegyelmiUgyekSzuro: FegyelmiUgyStoreTypes.getters.getFegyelmiUgyekSzuro,
    }),
    statisztika() {
      let fegyelmiUgyek = this.getFegyelmiUgyekSzamolt;
      if (this.fegyelmiUgyekSzuro >= 0) {
        fegyelmiUgyek = FegyelmiUgyFunctions.GetFegyelmiUgyekByStatisztikaSzuro(
          fegyelmiUgyek,
          this.user,
          this.fegyelmiUgyekSzuro
        );
      }
      let ugyek = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.Nyitott,
        szuro: StatisztikaSzurok.Nyitott,
        title: 'Nyitott ügyek',
        array: fegyelmiUgyek,
      };

      let sajatUgyekArr = [];
      if (this.user) {
        sajatUgyekArr = FegyelmiUgyFunctions.GetSajatUgyeim(
          fegyelmiUgyek,
          this.user
        );
      }
      let sajatUgyek = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.Sajat,
        szuro: StatisztikaSzurok.Sajat,
        title: 'Megrendelés vár a döntésemre',
        array: sajatUgyekArr,
      };
      let kesesbenArr =
        FegyelmiUgyFunctions.GetKesesbenlevoUgyek(fegyelmiUgyek);
      let kesesben = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.Kesesben,
        szuro: StatisztikaSzurok.Kesesben,
        title: 'Késésben',
        array: kesesbenArr,
      };
      let hetenEsedekesArr =
        FegyelmiUgyFunctions.GetHetenEsedekesUgyek(fegyelmiUgyek);
      let hetenEsedekes = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.HetenEsedekes,
        szuro: StatisztikaSzurok.HetenEsedekes,
        title: 'Héten esedékes',
        array: hetenEsedekesArr,
      };
      let vegrehajtasAlattArr =
        FegyelmiUgyFunctions.GetElanyagHiany(fegyelmiUgyek);
      let vegrehajtasAlatt = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.ElanyagHiany,
        szuro: StatisztikaSzurok.ElanyagHiany,
        title: 'Élanyag hiány',
        array: vegrehajtasAlattArr,
      };
      let lapanyagHianyArr =
        FegyelmiUgyFunctions.GetLapanyagHiany(fegyelmiUgyek);
      let lapanyagHiany = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.LapanyagHiany,
        szuro: StatisztikaSzurok.LapanyagHiany,
        title: 'Lapanyag hiány',
        array: lapanyagHianyArr,
      };
      let vegrehajtasraVaroArr =
        FegyelmiUgyFunctions.GetKellekHiany(fegyelmiUgyek);
      let vegrehajtasraVaro = {
        isSelected: this.fegyelmiUgyekSzuro == StatisztikaSzurok.KellekHiany,
        szuro: StatisztikaSzurok.KellekHiany,
        title: 'Kellék hiány',
        array: vegrehajtasraVaroArr,
      };
      return [
        ugyek,
        sajatUgyek,
        kesesben,
        hetenEsedekes,
        vegrehajtasraVaro,
        vegrehajtasAlatt,
        lapanyagHiany,
      ];
    },
  },
  watch: {},
  components: {},
};
</script>
<style>
.right-numbers .card-block {
  border: 2px solid rgba(131, 73, 245, 0) !important;
  cursor: pointer;
  transition: 0.5s;
}

.right-numbers .card-block:hover {
  border: 2px solid rgba(131, 73, 245, 0.5) !important;
}

.right-numbers .card-selected {
  border: 2px solid rgba(131, 73, 245, 1) !important;
  transition: 0.5s;
}
</style>
