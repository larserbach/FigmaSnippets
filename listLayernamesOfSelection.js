function listLayerNamesOfSelection() {
  const sel = figma.currentPage.selection;
  var res = ""
  
  sel.forEach( i => {
    const name = i.name;
    res += "\n"+name;
  })
  console.log(res)
}
listLayerNamesOfSelection()