import MessageCenter from './observable';
import Lubrication from './observable';
import {apiRoutes} from "./api-routes"

function convertObjToGetString(obj){
  let str=""
  Object.keys(obj).forEach((key,index)=>{
      str += `${!index ? "?" : "&"}${key.toString()}=${obj[key].toString()}`
  })
  return str;
}
function validateAjaxResponse(xhr, resolve, reject){
  xhr.onload = ()=>{
    if([200,300,301].indexOf(xhr.status) != -1)
      return resolve(JSON.parse(xhr.responseText))
    else{
      return reject(xhr.responseText)
    }
  }
  xhr.onerror = ()=>{
    console.log("Error:",xhr)
    reject(xhr)
  }
}
const drip = new Lubrication();
const oilyMix = {
    // API Routes
    apiRoutes,
    
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
    , ajax: {
      post(config){
        return new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest();
          xhr.open("post",config.url, true);
          validateAjaxResponse(xhr, resolve, reject)
          xhr.send(config.data)
        })
      }
      , get(config){
        return new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest();
          config.url += convertObjToGetString(config.data)
          xhr.open("get",config.url, true);
          validateAjaxResponse(xhr, resolve, reject)
        })
        xhr.send()
      }
    }
  }
export { oilyMix }