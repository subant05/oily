<oil-search-form>
    <form id="search-index" onsubmit={submitHanlder} method="get">
        <div class="eight columns search-input-column">
            <input ref="search" name="search" class="u-full-width" type="text" placeholder="{placeholder}" id="lookup">
        </div>
        <div class="two columns search-button-column">
            <button class="button search  button-secondary ">Search</button>
        </div>
        <div class="one columns search-filter-column">
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>        </div>
    </form>
    <script>
        function submitHanlder(e){
            e.preventDefault()
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