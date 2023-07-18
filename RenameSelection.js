function renameSelection(newname){
  
  const sel = figma.currentPage.selection;

  sel.forEach(sel => sel.name = newname);

}

renameSelection('Enter name here')