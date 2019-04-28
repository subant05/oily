<oil-social-media>
    <div class="social-media-share">
        <ul>
            <li>
                <!-- Facebook -->
                <div class="fb-share-button" 
                    data-href="{siteURI}" 
                    data-layout="button" data-size="large">
                        <a target="_blank" 
                            href="https://www.facebook.com/sharer/sharer.php?u={siteURI}&amp;src=sdkpreparse" 
                            class="fb-xfbml-parse-ignore"></a>
                </div>
            </li>
            <li>
                <!-- Twitter -->
                <div class="twitter-share-button">
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a>
                </div>
            </li>
        </ul>
    </div>
    <script>
        this.on("mount", ()=>{
            if(this.root.ownerDocument)
                this.siteURI = encodeURIComponent(this.root.ownerDocument.location.href);
        })
    </script>
    <style>
    </style>
</oil-social-media>