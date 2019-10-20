<oil-admin-dashboard>
    <button class="button-secondary" id="oils" data-refs="oils">Oils</button>
    <button class="button-secondary" id="blends" data-refs="blends">Blends</button>
    <button class="button-primary" id="add-oil" data-refs="add-oil">Add Oil</button>
    <button class="button-primary" id="add-blend" data-refs="ad-blend">Add Blend</button>
    <oil-table columns={columns} results={results}></oil-table>

    <script>
        this.on("mount", ()=>{
            if(!this.setProperties){
                this.columns = opts.columns;
                this.results = opts.results;
                this.update();
            }
        })
    </script>
</oil-admin-dashboard>