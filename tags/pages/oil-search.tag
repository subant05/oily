<oil-search>
    <div class="row">
        <oil-search-form placeholder={placeholder} value={value}></oil-search-form>
    </div> 
    <div class="row">
        <div class="twelve columns results">
            <div each={results}>
                <oil-search-card 
                    src="{src}" 
                    title="{title}"
                    description="{description}"
                    ranking="{ranking}" 
                    count="{count}"/>
            </div>
        </div>
    </div>
    <script>
        this.placeholder = opts.placeholder;
        this.value = opts.value;
        this.results = opts.results
        this.ranking = opts.ranking
        this.count = opts.count
        this.on("mount",()=>{
            this.placeholder = opts.placeholder;
            this.value = opts.value;
            this.results = opts.results
            this.ranking = opts.ranking
            this.count = opts.count
        })
    </script>
    <style>

    </style>
</oil-search>