<oil-pagination>
    <div class="row">
        <div class="twelve columns">
            <div  class="one columns prev">
                <a href="?page=prev" class="{hide : hidePrev}">
                    <
                </a>
            </div>
            <div class="one columns numbers" each={ name, i in pages}>
                <a href="?page={name}" class="">{name}</a>
            </div> 
            <div class="one columns next">
                <a href="?page=next" class="{hide : hideNext}">
                    >
                </a>
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
                    console.log(count ,opts.pages)
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
        .hide{
            display:none !important;
        }
    </style>
</oil-pagination>