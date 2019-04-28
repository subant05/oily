<oii-navigation>
    <nav class="two columns ">
        <ul refs="login" onclick={login}>
                <li><a herf="#" class="button button-secondary">Log In</a></li>
                <li><a herf="#" class="button button-primary">Sign Up</a></li>
        </ul> 
        <oil-social-media></oil-social-media>
    </nav>
    <script>
        this.login = function(){
           this.drip.trigger("login")
        }
    </script>
</oii-navigation>