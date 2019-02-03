<oil-card>
    <div class="card">
        <yield></yield>
    </div>
    <script>
        this.json = JSON.stringify(this)
        this.src = opts.src || opts.riotSrc
        this.title = opts.title;
        this.description = opts.description
        this.ranking = opts.ranking
        this.count = opts.count || opts.reviewCount
    </script>
    
    <style>
    
    </style>
</oil-card>