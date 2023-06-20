// If you selected a component set
// Running the script will select the last item in every Component of the set

const sel = figma.currentPage.selection[0].children;

var myNodes = [];

sel.forEach(sel => {
  const leng = sel.children.length;
  myNodes.push(sel.children[leng-1])
});
figma.currentPage.selection = myNodes;