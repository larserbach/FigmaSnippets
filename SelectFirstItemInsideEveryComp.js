// If you selected a component set
// Running the script will select the first item in every Component of the set

const sel = figma.currentPage.selection[0].children;

var myNodes = [];

sel.forEach(sel => myNodes.push(sel.children[0]));
figma.currentPage.selection = myNodes;