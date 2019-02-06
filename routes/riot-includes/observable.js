const riot = require('riot')
class MessageCenter {
    constructor(state) {
        riot.observable(this);
        this.state =state

        this.on('contact_add', this.add);
        this.on('contact_remove', this.remove);
        this.on('contact_load', this.load);
    }

    load() {
        this.trigger('contact_change', this.state);
    }

    add(contato) {
        console.log('New Contact');
    }

    remove(id) {
        console.log('Remove contact');
    }
}
module.exports =  MessageCenter;