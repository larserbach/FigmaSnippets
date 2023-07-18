// Select layers in your selection by multiple names

function selectManyByName(searchStrings) {

  const sel = figma.currentPage.selection;

  var myNodes = [];

  function searchForString(searchTerm, item){
    item.forEach( i => {
      const res = i.findAll(n => n.name === searchTerm)
      res.forEach(r => myNodes.push(r))
    })
  }

  searchStrings.forEach(str => {
    searchForString(str, sel)
  })

  //console.log(myNodes)

  figma.currentPage.selection = myNodes;

}

selectManyByName(['label', 'labelAppendix']) // Change Strings to your need here