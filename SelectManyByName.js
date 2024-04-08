// Select layers in your selection by multiple names




function searchForString(searchTerm, selection, deepSearch ){
  
  let matches = []

  selection.forEach( item => {
    if (item.name.includes(searchTerm)) 
    {
      matches.push(item)
    } else if (deepSearch) {
      item.findAll(n => n.name.includes(searchTerm)).forEach(match => matches.push(match)) 
    }
  })
  
  return matches
  
}


function selectManyByName(searchStrings, deepSearch=true) {

  const sel = figma.currentPage.selection;

  var matches = [];

  searchStrings.forEach(str => {
    res = searchForString(str, sel, deepSearch)
    res.forEach(r => matches.push(r))
  })

  //console.log(matches)

  figma.currentPage.selection = matches;

}

selectManyByName(['State=Rest'], true) // Change Strings to your need here. Set to false if do not want children of your selection