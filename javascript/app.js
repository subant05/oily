import {default as riot, observable} from '../node_modules/riot/lib/riot.js';
import {oilyMix} from './mixins.js';
window.riot = riot;
window.riot.mixin("oilyMix",oilyMix,true);