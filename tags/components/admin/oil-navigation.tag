<oil-admin-navigation>
    <nav class="two columns ">
        <ul>
            <li><a herf="/admin/signout" class="button" data-ref="signOut">Sign Out</a></li>
        </ul>
        <ul>
            <li><button class="button-secondary" id="oils" data-ref="oils">Oils</button></li>
            <li><button class="button-secondary" id="blends" data-ref="blends">Blends</button></li>
            <li><button class="button button-primary" data-ref="addOil">Add Oil</button></li>
            <li><button class="button button-primary">Add Blend</button></li>
        </ul> 
    </nav>
    <script>
        this.on("mount",()=>{
            this.refs.addOil.addEventListener("click", ()=> this.redirect("/admin/add-oil"), false)
            this.refs.signOut.addEventListener("click", ()=> this.redirect("/admin/signout"), false)
        })
    </script>
</oil-admin-navigation>