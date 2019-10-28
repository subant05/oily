<oil-admin-add-oil>
    <form action="/admin/add-oil" method="post" class="crud" onsubmit={addOil} ref="addOilForm" name="addOilForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" ref="name"  required="true"/>
        <label for="description">Description</label>
        <textarea name="description" id="description" ref="description"  required="true"></textarea>
        <label for="brand">Brand</label>
        <select name="brand" id="brand" ref="brand" required="true" pattern="[1-9]+">
            <option></option>
            <option  each={brand in brands} value={brand.id}>{brand.value}</option>
        </select>
        <button type="button" id="addBrand" ref="addOil" onclick={insertNewBrand}> Add A New Brand</button>
        <label for="family">Family</label>
        <select name="family" id="family" ref="family" required="true" pattern="[1-9]+">
            <option></option>
            <option  each={fam in family} value={fam.id}>{fam.value}</option>
        </select>
        <label for="uses">Uses</label>
        <div each={use in uses}>
            <span>
                {use.value} : <input type="checkbox"  name="uses" required ="true" value={use.id}/>
            </span>
        </div>
        <fieldset>
            <button type="submit" ref="save-button">Save</button>
            <button type="button" ref="cancel-button">Cancel</button>
        </fieldset>
    </form>
    <script>           
            

            this.addOil =  function (e){
                e.preventDefault()
                    <!--  console.log(this.refs.addOilForm)  -->
                    if(!this.refs.addOilForm.checkValidity()){
                        [...e.target.elements].forEach(input=>{
                            if(!input.validity.valid)
                                console.log(input)
                        })
                        return;
                    }

                    this.ajax
                        .post({url:location.pathname, data:new FormData(e.target)})
                        .then(
                            response=>location.pathname = "/admin"
                            ,err=>console.log("Response",err)
                        )
            };

            this.insertNewBrand = function(e){
                e.preventDefault()
                if(!this.brandInput || this.brandInput==="select"){
                    this.brandSelect =  this.refs.brand
                        .parentElement.replaceChild(this.insertNewBrand,this.refs.brand)
                    this.refs.addOil.textContent = "Select A Brand"
                    this.brandInput = "text"
                    this.update()
                } else if(this.brandInput==="text"){
                    this.insertNewBrand.parentElement.replaceChild(this.brandSelect,this.insertNewBrand)
                     this.refs.addOil.textContent = "Add A New Brand"
                    this.brandInput = "select"
                    this.update()
                }
            };

            this.on("mount",()=>{
                this.insertNewBrand = document.createElement("input")
                this.insertNewBrand.type="text"
                this.insertNewBrand.setAttribute("ref","brand")
                this.insertNewBrand.name="brand"
                this.insertNewBrand.id="brand"
                this.insertNewBrand.required=true
                
                if( !this.setProperties){      
                    this.brands = opts.brands;
                    this.uses = opts.uses;
                    this.family = opts.family;
                    this.update();
                }
            })
    </script>
</oil-admin-add-oil>