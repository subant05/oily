<oil-pagination>
    <div class="row">
        <div class="twelve columns">
            <div class="one columns prev {hide : hidePrev}">
                <a href="?page=next">  </a>
            </div>
            <div class="one columns numbers" each={ name, i in pages}>
                <a href="?page={name}" class="">{name}</a>
            </div> 
            <div class="one columns next {hide : hideNext}">
                <a href="?page=next">  </a>
            </div>
        </div>
    </div>
    <script>
        function updatePagination(){
            let count=0,
                arr = [];
            if(typeof opts.pages === "number"){
                count = opts.pages
                do{
                    arr.unshift(count--)
                }while(arr.length < opts.pages &&  arr.length !== 10)
                this.pages = arr;
                this.hidePrev = arr[0] === 1;
                this.hideNext = arr.length < 10;
                this.update()
            }
        }
        this.on("mount",updatePagination)
    </script>
    <style>
    </style>
</oil-pagination>