<oil-admin-add-oil>
    <form action="/admin/add-oil" method="post" class="crud" onsubmit={addOil}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" ref="name" />
        <label for="description">Description</label>
        <textarea name="description" id="description" ref="description"></textarea>
        <label for="brand">Brand</label>
        <select name="brand" id="brand" ref="brand">
            <option  each={value, i in brands} value={i}>{value}</option>
        </select>
        <button type="button" id="addBrand" ref="addOil" onclick={insertNewBrand}> Add Brand</button>
        <label for="family">Family</label>
        <select name="family" id="family" ref="family">
            <option  each={value, i in family} value={i}>{value}</option>
        </select>
        <label for="uses">uses</label>
        <select name="uses" id="uses" ref="uses">
            <option  each={value, i in uses} value={i}>{value}</option>
        </select>
        <fieldset>
            <button type="submit" ref="save-button">Save</button>
            <button type="button" ref="cancel-button">Cancel</button>
        </fieldset>
    </form>
    <script>
            function insertNewBrand(e){
                e.preventDefault()
                console.log(e)
            }

            function addOil(e){
                e.preventDefault()
                alert(e)
            }
            this.addOil = addOil;
            this.insertNewBrand = insertNewBrand;

            this.on("mount",()=>{
                if( !this.setProperties){      
                    this.brands = opts.brands;
                    this.uses = opts.uses;
                    this.family = opts.family;
                    console.log(this.family)
                    this.update();
                }
            })
    </script>
</oil-admin-add-oil>