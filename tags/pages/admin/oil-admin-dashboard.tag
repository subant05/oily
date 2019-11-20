<oil-admin-dashboard>

    <h2>{title}</h2>

    <script>
        this.title = "Dashboard"
        this.on("mount", ()=>{
            if(!this.setProperties){

                this.update();
            }
        })
    </script>
</oil-admin-dashboard>