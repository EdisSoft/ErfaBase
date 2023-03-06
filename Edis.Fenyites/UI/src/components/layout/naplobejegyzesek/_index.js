import Vue from 'vue';

import './jutalom/_index';

import { registerComponent } from '../../../utils/vueUtils';
import SzabadszovegesFegyelmiNaplobejegyzes from './SzabadszovegesFegyelmiNaplobejegyzes.vue';

Vue.component(
  SzabadszovegesFegyelmiNaplobejegyzes.name,
  SzabadszovegesFegyelmiNaplobejegyzes
);

registerComponent(SzabadszovegesFegyelmiNaplobejegyzes);
