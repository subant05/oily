<oil-admin-dashboard>

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