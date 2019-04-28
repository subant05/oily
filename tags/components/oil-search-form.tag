<oil-search-form>
    <form id="search-index" onsubmit={submitHanlder} method="get">
        <div class="nine columns search-input-column">
            <input ref="search" name="search" class="u-full-width" type="text" placeholder="{placeholder}" id="lookup">
        </div>
        <div class="two columns search-button-column">
            <button type="submit" class="button search  button-secondary ">Search</button>
        </div>
        <div class="one columns search-filter-column">
            <oil-switch data-ref="filter"></oil-switch>
        </div>
    </form>
    <script>
        function submitHanlder(e){
            e.preventDefault()
            console.log("Submit: ", this.refs.search.value)
            this.trigger("submit",this.refs.search.value)
        }
        this.on("mount",(e)=>{
            this.placeholder = opts.placeholder
            this.submitHanlder = opts.submit || submitHanlder
            this.update();
        })
    </script>
    <style>
    </style>
</oil-search-form>