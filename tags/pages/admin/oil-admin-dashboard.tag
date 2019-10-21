<oil-admin-dashboard>
    <button class="button-secondary" id="oils" data-ref="oils">Oils</button>
    <button class="button-secondary" id="blends" data-ref="blends">Blends</button>
    <button class="button-primary" id="add-oil" data-ref="addoil">Add Oil</button>
    <button class="button-primary" id="add-blend" data-ref="adblend">Add Blend</button>
    <oil-table columns={columns} results={results}></oil-table>

    <script>

        this.on("mount", ()=>{
            this.refs.addoil.addEventListener("click", ()=> this.redirect("/admin/add-oil"), false)
            if(!this.setProperties){
                this.columns = opts.columns;
                this.results = opts.results;
                this.update();
            }
        })
    </script>
</oil-admin-dashboard>