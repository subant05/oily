import {default as riot} from '../node_modules/riot/lib/riot.js';
import search from './search.js';
import {globalMixin} from './mixins.js';
window.riot = riot;
window.riot.mixin("globalMixin",globalMixin,true);
