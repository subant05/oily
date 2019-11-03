<oil-admin-add-oil>
    <form action="/admin/api/add-oil" method="post" class="crud" onsubmit={addOil} ref="addOilForm" name="addOilForm" novalidate="novalidate">

        <fieldset>
            <label for="name">Name *</label>
            <span class="error" ref="error_name">{error.name}</span>
            <input type="text" id="name" name="name" ref="name"  required="true"/>
        </fieldset>


        <fieldset>
            <label for="description">Description *</label>
            <span class="error" ref="error_description">{error.description}</span>
            <textarea name="description" id="description" ref="description"  required="true"></textarea>
        </fieldset>


        <fieldset>
            <label for="brand">Brand *</label>
            <span class="error" ref="error_brand">{error.brand}</span>
            <select name="brand" id="brand" ref="brand" required="true" pattern="[1-9]+">
                <option></option>
                <option  each={brand in brands} value={brand.id}>{brand.value}</option>
            </select>
            <button type="button" id="addBrand" ref="addOil" onclick={insertNewBrand}> Add A New Brand</button>
        </fieldset>

        <fieldset>
            <label for="family">Family</label>  
            <span class="error" ref="error_family">{error.family}</span>
            <select name="family" id="family" ref="family" required="true" pattern="[1-9]+">
                <option></option>
                <option  each={fam in family} value={fam.id}>{fam.value}</option>
            </select>
        </fieldset>

        <fieldset>
            <label for="uses">Uses</label>
            <span class="error" ref="error_uses">{error.uses}</span>
            <div each={use in uses}>
                <span>
                    {use.value} : <input type="checkbox"  name="uses"  value={use.id}/>
                </span>
            </div>
        </fieldset>

        <fieldset>
            <button type="submit" ref="save-button">Save</button>
            <button type="button" ref="cancel-button">Cancel</button>
        </fieldset>
    </form>

    <script>           
            this.error={}
            this.addOil =  function (event){

                event.preventDefault()
                    this.error={}
                    this.update();

                    
                    <!--  console.log(this.refs.addOilForm)  -->
                    if(!this.refs.addOilForm.checkValidity()){

                        Array.from(this.refs.addOilForm.elements).forEach(node=>{
                            if(!node.checkValidity())
                                    this.error[node.name] = `Please provide a valid value.`
                        });
                        
                        this.update();
                        return;
                    }


                    if(!Array.from(this.refs.addOilForm.elements.uses).filter(checkbox=>checkbox.checked).length){
                        this.error.uses = "Please select a use.";
                        this.update();
                        return;
                    }

                    this.ajax
                        .post({url:this.refs.addOilForm.action, data:new FormData(this.refs.addOilForm)})
                        .then(
                            response=>location.pathname = "/admin"
                            ,err=>console.log("Response",err)
                        )

                    this.update()
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