<oil-admin-add-oil>
    <form action="/admin/add-oil" method="post" data-ref="oilform" class="crud">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" data-ref="name" />
        <label for="description">Description</label>
        <textarea name="description" id="description" data-ref="description"></textarea>
        <label for="family">Family</label>
        <select name="family" id="family" data-ref="family">
            <option value="floral">Floral</option>
            <option value="woodsy">Woodsy</option>
            <option value="earthy">Earthy</option>
            <option value="herbaceous">Herbaceous</option>
            <option value="camphoraceous">Camphoraceous</option>
            <option value="resinous">Resinous</option>
            <option value="medicinal">Medicinal</option>
            <option value="spicy">Spicy</option>
            <option value="fruity">Fruity</option>
        </select>
        <label for="uses">uses</label>
        <select name="uses" id="uses" data-ref="uses">
            <option value="topical">Topical</option>
            <option value="internal">Internal</option>
            <option value="aromatic">Aromatic</option>
        </select>
        <fieldset>
            <button type="submit" data-ref="save-button">Save</button>
            <button data-ref="cancel-button">Cancel</button>
        </fieldset>
    </form>
    <script></script>
</oil-admin-add-oil>