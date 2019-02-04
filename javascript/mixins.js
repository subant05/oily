const globalMixin = {
    // the `opts` argument is the option object received by the tag as well
    init: function(opts) {
        this.on('updated', (e)=> { 
            // console.log('Updated!',this.root,this) 
        })
        this.on("mount",e=>{
            this.setProperties();
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
  }
export { globalMixin }