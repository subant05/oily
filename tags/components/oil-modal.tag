<oil-modal>
    <div class="modal {active: show}" click={hideModal}>
        <div class="modal-content">
         <h1>Comming Soon.</h1>
        </div>
    </div>
    <script>
       this.show = true;
       console.log(this)
       this.hideModal =  function(){
           this.show = false;
       }
    </script>
</oil-modal>