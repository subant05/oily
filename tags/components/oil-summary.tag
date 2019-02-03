<oil-summary>
    <img src="{src}" alt="{title} photo" >
    <div class="container">
        <h5><b>{title}</b></h5> 
        <p>{description}</p> 
    </div>
    <script>
        this.src = opts.src || opts.riotSrc
        this.title = opts.title;
        this.description = opts.description
    </script>
    <style>
    </style>
</oil-summary>