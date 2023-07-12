// If you selected a component set
// Running the script will select the first item in every Component of the set

function selectFirstItemInEveryComp(){
  const sel = figma.currentPage.selection;

  var myNodes = [];

  sel.forEach(sel => {
    if(sel.children.length > 0){
      myNodes.push(sel.children[0])
    }
  });
  figma.currentPage.selection = myNodes;
}
selectFirstItemInEveryComp()