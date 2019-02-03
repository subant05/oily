<oil-rating>
    <div class="rating-container">
        <div>
        <ul class="stars {enabled:enabled}">
            <li each={className, i in rate} class="icon-star-{className}"></li>
        </ul>
        </div>
        <div class="review-count">{count}</div>
    </div>
    <script type="es6">
        this.enabled =  this.opts.enabled;
        this.updateRanking = function(e){
            if(!this.enabled ) return;
        }
        function mount(e){
            var ranking = this.opts.ranking.split(".")
                , counter = 0
                , rate = [];
            do{
                if(counter < ranking[0])
                    rate.push("full");
                else if(ranking[1]){
                    rate.push("half");
                    ranking.pop()
                }else
                    rate.push("empty");
            }while(++counter < 5)
            this.rate = rate;
            this.count = this.opts.count;
            this.update();
        }
        this.on("mount",mount.bind(this))

    </script>
    <style>
        ul{
            list-style:none;
        }
        li{
            display:inline;
        }
        .enabled{
            cursor:pointer;
        }
    </style>
</oil-rating>