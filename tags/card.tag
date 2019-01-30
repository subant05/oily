<card>
    <div class="card">
        <img src="{src}" alt="{title} photo" >
        <div class="container">
            <h5><b>{title}</b></h5> 
            <p>{description}</p> 
        </div>
        <yield></yield>
    </div>
    <script>
        this.src = opts.src;
        this.title = opts.title;
        this.description = opts.description
    </script>
    
    <style>
    
    </style>

</card>