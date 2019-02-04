<oil-modal>
    <div class="modal {active: show}" click={hideModal}>
        <div class="modal-content">
         <h1>Comming Soon.</h1>
        </div>
    </div>
    <script>
       this.show = true;
       this.hideModal =  function(){
           this.show = false;
       }
       this.on("mount", function(){
       })
    </script>
</oil-modal>