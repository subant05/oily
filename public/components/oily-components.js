riot.tag2("oil-card",'<div class="card"> <oil-summary riot-src="{src}" title="{title}" description="{description}"></oil-summary> <oil-rating if="{ranking && count}" ranking="{ranking}" count="{count}"></oil-rating> </div>',"","",function(i){this.src=i.src||i.riotSrc,this.title=i.title,this.description=i.description,this.ranking=i.ranking,this.count=i.count||i.reviewCount});
riot.tag2("oil-modal",'<div class="modal {show: active}"> <div class="modal-content"> <h1>Comming Soon.</h1> <button onclick="{hideModal}" class="button button-secondary"> CLOSE </button> </div> </div>',"","",function(o){var i=this;this.hideModal=function(){this.active=!1},this.on("mount",function(o){i.active=!1,i.drip&&i.drip.on("login",function(){console.log("Log In Fired"),i.active=!0,i.update()})})});
riot.tag2("oii-navigation",'<nav class="two columns "> <ul refs="login" onclick="{login}"> <li><a herf="#" class="button button-secondary">Log In</a></li> <li><a herf="#" class="button button-primary">Sign Up</a></li> </ul> </nav>',"","",function(i){this.login=function(){this.drip.trigger("login")}});
riot.tag2("oil-pagination",'<div class="row"> <div class="twelve columns"> <div class="one columns prev {hide : hidePrev}"> <a href="?page=next"> </a> </div> <div class="one columns numbers" each="{name, i in pages}"> <a href="?page={name}" class="">{name}</a> </div> <div class="one columns next {hide : hideNext}"> <a href="?page=next"> </a> </div> </div> </div>',"","",function(a){this.on("mount",function(){var e=0,i=[];if("number"==typeof a.pages){for(e=a.pages;i.unshift(e--),i.length<a.pages&&10!==i.length;);this.pages=i,this.hidePrev=1===i[0],this.hideNext=i.length<10,this.update()}})});
riot.tag2("oil-rating",'<div class="rating-container"> <ul class="stars {enabled:enabled}"> <li each="{className, i in rate}" class="icon-star-{className}"></li> <li class="review-count">{count}</li> </ul> <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating" class="aggregate-rating"> <meta itemprop="ratingValue" content="{rate}"> <meta itemprop="reviewCount" content="{count}"> </span> </div>','oil-rating ul,[data-is="oil-rating"] ul{ list-style:none; } oil-rating li,[data-is="oil-rating"] li{ display:inline; } oil-rating li:last-of-type,[data-is="oil-rating"] li:last-of-type{ margin-left:20px; } oil-rating .enabled,[data-is="oil-rating"] .enabled{ cursor:pointer; }',"",function(t){this.enabled=this.opts.enabled,this.updateRanking=function(t){this.enabled},this.on("mount",function(t){for(var i=this.opts.ranking.split("."),a=0,n=[];a<i[0]?n.push("full"):i[1]?(n.push("half"),i.pop()):n.push("empty"),++a<5;);this.rate=n,this.count=this.opts.count,this.update()}.bind(this))});
riot.tag2("oil-search-form",'<form id="search-index" onsubmit="{submitHanlder}" method="get"> <div class="nine columns search-input-column"> <input ref="search" name="search" class="u-full-width" type="text" placeholder="{placeholder}" id="lookup"> </div> <div class="two columns search-button-column"> <button type="submit" class="button search button-secondary ">Search</button> </div> <div class="one columns search-filter-column"> <oil-switch data-ref="filter"></oil-switch> </div> </form>',"","",function(e){var s=this;function i(t){t.preventDefault(),console.log("Submit: ",this.refs.search.value),this.trigger("submit",this.refs.search.value)}this.on("mount",function(t){s.placeholder=e.placeholder,s.submitHanlder=e.submit||i,s.update()})});
riot.tag2("oil-summary",'<img riot-src="{src}" alt="{title} photo"> <div class="container"> <h5><b>{title}</b></h5> <p>{description}</p> </div>',"","",function(i){this.src=i.src||i.riotSrc,this.title=i.title,this.description=i.description});
riot.tag2("oil-switch",'<label class="switch"> <input type="checkbox"> <span class="slider"></span> </label>',"","",function(s){});
riot.tag2("oil-blend-details",'<div class="row"> <div class="oil-blend-detail"> <div class="oil-summary"> <section class="oil-summary-description"> <meta property="og:rating" content="4.14285707473755"> <meta property="og:rating_scale" content="5"> <div id="karma-lazy-sponsorLogo" class="recipe-summary__logo"></div> <h3 id="recipe-main-content" class="recipe-summary__h1">Relaxation</h3> <div class="recipe-summary__stars"> </div> <div class="summary"> <p> <span class="summary_author"> Recipe by: </span> <span class="submitter_author_name">Somebody</span> </p> <div class="submitter__description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sollicitudin congue. Vestibulum lobortis placerat hendrerit. Vivamus diam metus, pulvinar ac faucibus nec, dictum id velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in arcu magna. Cras vitae ipsum accumsan, consequat nisl eu, pretium augue. Suspendisse at ullamcorper libero."</div> </div> <div class="social-media-share"> <ul> <div class="fb-share-button" data-href="{shareURI}" data-layout="button" data-size="large"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={shareURI}&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"></a> </div> </li> <li> <div class="twitter-share-button"> <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a> </div> </li> </ul> </div> <div class="formula"> <h5>Formula</h5> <ul> <li>Vanilla</li> <li>Lavendar</li> <li>Oregano</li> </ul> </div> </section> <section class="oil-summary-picture"> <div class="oil-summary-picture-hero"> <div class="oil-summary-picture-hero-wrap"> <img class="oil-summary-photo" src="https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg" alt="Relaxation Oil Image"> </div> </div> </section> </div> </div> </div>',"","",function(a){var s=this;this.shareURI=this.opts.shareURI,this.on("mount",function(){s.setProperties||(s.shareURI=encodeURIComponent(s.opts.shareURI),s.update())})});
riot.tag2("oil-search",'<div class="row"> <oil-search-form data-ref="searchBar" placeholder="{placeholder}" riot-value="{value}"></oil-search-form> </div> <div class="row"> <div class="twelve columns results"> <a each="{results}" href="#" alt="{title}"> <oil-card riot-src="{src}" title="{title}" description="{description}" ranking="{ranking}" count="{count}"></oil-card> </a> </div> </div>',"","",function(e){var r=this;function a(e){this.searchValue=e.trim(),console.log("Event Emmited from search-form component: ",this.searchValue)}this.on("mount",function(){r.refs.searchBar.on("submit",a),r.setProperties||(r.placeholder=e.placeholder,r.value=e.value,r.results=e.results,r.ranking=e.ranking,r.count=e.count,r.pages=e.pages,r.update())})});