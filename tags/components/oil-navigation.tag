<oii-navigation>
    <nav class="two columns ">
        <ul refs="login" onclick={login}>
                <li><a herf="#" class="button button-secondary">Log In</a></li>
                <li><a herf="#" class="button button-primary">Sign Up</a></li>
        </ul> 
    </nav>
    <script>
        this.login = function(){
            window.grease.trigger("change")
        }
    </script>
</oii-navigation>