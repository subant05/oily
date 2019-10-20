<oil-table>
<table class="u-full-width">
  <thead>
    <tr>
      <th each={column in columns}>column</th>
    </tr>
  </thead>
  <tbody>
    <tr each={row in results}>
      <td each={value, name in row}>{value}</td>
    </tr>
  </tbody>
</table>

<script>
    this.columns = opts.columns;
    this.results = opts.results;
</script>
</oil-table>