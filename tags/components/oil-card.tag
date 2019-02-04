<oil-card>
    <div class="card">
        <oil-summary src="{src}" title="{title}" description="{description}"></oil-summary>
        <oil-rating if={ranking && count } ranking="{ranking}" count="{count}"></oil-rating>
    </div>
    <script>
        this.src = opts.src || opts.riotSrc
        this.title = opts.title;
        this.description = opts.description
        this.ranking = opts.ranking
        this.count = opts.count || opts.reviewCount
    </script>
    
    <style>
    
    </style>
</oil-card>