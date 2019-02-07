<oil-modal>
    <div class="modal {show: active}">
        <div class="modal-content">
         <h1>Comming Soon.</h1>
         <button  onclick={hideModal} class="button button-secondary">
            CLOSE
        </button>
        </div>
    </div>
    <script>
       this.hideModal =  function(){
           this.active = false;
       }
       this.on("mount", (event)=>{
            this.active = false;
           if(this.drip){
            this.drip.on("login",()=>{
                console.log("Log In Fired")
                this.active = true;
                this.update()
            })
           }
       })
    </script>
</oil-modal>