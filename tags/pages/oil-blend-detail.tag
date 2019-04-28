<oil-blend-details>
    <div class="row">
        <div class="oil-blend-detail">
            <div class="oil-summary">
                <section class="oil-summary-description">
                    <meta property="og:rating" content="4.14285707473755">
                    <meta property="og:rating_scale" content="5">
                    <div id="karma-lazy-sponsorLogo" class="recipe-summary__logo"></div>
                    <h3 id="recipe-main-content" class="recipe-summary__h1" >Relaxation</h3>
                    <!--rating stars-->
                    <div class="recipe-summary__stars">
                        <!--  <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating" class="aggregate-rating">
                            <meta itemprop="ratingValue" content="4.14">
                            <meta itemprop="reviewCount" content="5">
                        </span>  -->
                    </div>
                    <div class="summary">
                        <p>
                            <span class="summary_author">
                                Recipe by: 
                            </span>
                            <span class="submitter_author_name" >Somebody</span>
                        </p>
                        <div class="submitter__description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sollicitudin congue. Vestibulum lobortis placerat hendrerit. Vivamus diam metus, pulvinar ac faucibus nec, dictum id velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in arcu magna. Cras vitae ipsum accumsan, consequat nisl eu, pretium augue. Suspendisse at ullamcorper libero."</div>
                    </div>
                    <div class="social-media-share">
                        <ul>
                                <!-- Facebook -->
                                <div class="fb-share-button" 
                                    data-href="{shareURI}" 
                                    data-layout="button" data-size="large">
                                        <a target="_blank" 
                                            href="https://www.facebook.com/sharer/sharer.php?u={shareURI}&amp;src=sdkpreparse" 
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
                    <div class="formula">
                        <h5>Formula</h5>
                        <ul>
                            <li>Vanilla</li>
                            <li>Lavendar</li>
                            <li>Oregano</li>
                        </ul>
                    </div>
                </section>
                <section class="oil-summary-picture">
                    <div class="oil-summary-picture-hero">
                        <div class="oil-summary-picture-hero-wrap">
                            <img class="oil-summary-photo" src="https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg" alt="Relaxation Oil Image">
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <script>
        this.shareURI = this.opts.shareURI;
        this.on("mount", ()=>{
             if( !this.setProperties){
                this.shareURI = encodeURIComponent(this.opts.shareURI);
                this.update();
            }
        })
    </script>
    <style>
    </style>
</oil-blend-details>