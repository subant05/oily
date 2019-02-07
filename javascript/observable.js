const riot = require('riot')
export default class Lubrication {
    constructor(state) {
        riot.observable(this);
        this.state =state
    }
}