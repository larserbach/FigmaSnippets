function printCurrentSelection() {
  const sel = figma.currentPage.selection;
  
  sel.forEach( i => {
    
    console.log('# # # # # # # # # # # # #')
    console.log(i.name)
    console.log('# # # # # # # # # # # # #\n')
    console.log(i)
    console.log('\n')
  })
}
printCurrentSelection()