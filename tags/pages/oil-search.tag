<oil-search>
    <div class="row">
        <oil-search-form data-ref="searchBar" placeholder={placeholder} value={value}></oil-search-form>
    </div> 
    <div class="row">
        <div class="twelve columns results">
                <oil-card  each={results}
                    src="{src}" 
                    title="{title}"
                    description="{description}"
                    ranking="{ranking}" 
                    count="{count}"/>
        </div>
    </div>
    <oil-pagination pages={pages}></oil-pagination>
    <script>
        function submit(value){
            this.searchValue = value.trim();
        }
        this.on("mount",()=>{
            this.refs.searchBar.on("submit",submit)
            if( !this.setProperties){
                this.placeholder = opts.placeholder;
                this.value = opts.value;
                this.results = opts.results
                this.ranking = opts.ranking
                this.count = opts.count
                this.pages = opts.pages;
                this.update();
            }
        })
    </script>
    <style>

    </style>
</oil-search>