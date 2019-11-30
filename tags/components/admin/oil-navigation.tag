<oil-admin-navigation>
    <nav class="two columns ">
        <ul>
            <li><a class="button" id="dashboard" data-ref="dasboard" href="/admin/">Home</a></li>
        </ul>
        <ul>
            <li><a class="button button-secondary" id="oils" data-ref="oils" href="/admin/list-oils">Oils</a></li>
            <li><a class="button button-secondary" id="blends" data-ref="blends"  href="/admin/list-blends">Blends</a></li>
            <li><a class="button button-primary" data-ref="addOil" href="/admin/add-oil">Add Oil</a></li>
            <li><a class="button button-primary"  data-ref="addBlend" href="/admin/add-blend">Add Blend</a></li>
        </ul> 
        <ul>
            <li><a herf="/admin/signout" class="button" data-ref="signOut">Sign Out</a></li>
        </ul>
    </nav>
    <script>
        this.on("mount",()=>{

        })
    </script>
</oil-admin-navigation>