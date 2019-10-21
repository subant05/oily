import MessageCenter from './observable';
import Lubrication from './observable';
const drip = new Lubrication();
const oilyMix = {
    // the `opts` argument is the option object received by the tag as well
    init: function(opts) {
        this.on('updated', (e)=> { 
            // console.log('Updated!',this.root,this) 
        })
        this.on("mount",e=>{
            this.setProperties();
            this.drip = drip;
            // this.on("*"
            //     , ()=>setTimeout(this.update.bind(this),0)
            // )
        })
    }  
    , getOpts: function() {
      return this.opts
    }
    , setOpts: function(opts, update) {
      this.opts = opts
      if (!update) this.update()
      return this
    }
    , setProperties: function(){
        for(let key in this.opts)
            this[key] = this.opts[key]
        this.update()
    }
    , redirect(path){
      window.location.pathname = path
    }
  }
export { oilyMix }