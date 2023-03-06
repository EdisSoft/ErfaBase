import { registerComponent } from '../../utils/vueUtils';

import './Jutalom/_index';

import SzabadszovegesNaplobejegyzesRogzitese from './SzabadszovegesNaplobejegyzesRogzitese.vue';
import Rendszerbeallitasok from './site/Rendszerbeallitasok.vue';
import JutalomEloterjesztes from './JutalomEloterjesztes.vue';

registerComponent(SzabadszovegesNaplobejegyzesRogzitese);
registerComponent(Rendszerbeallitasok);
registerComponent(JutalomEloterjesztes);
