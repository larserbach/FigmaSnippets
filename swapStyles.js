
function swapStyle(){ 
  const allStylesAsArray = figma.getLocalPaintStyles()
  // for (let style of allStylesAsArray) {
  //   console.log(style.name)
  // }

  function  getStyleName(styleId){
    foundStyle = allStylesAsArray.find(style => style.id === styleId)
    console.log(foundStyle.name)
  }

  

  const sel = figma.currentPage.selection;

  let res = sel.forEach(sel => {
    let nodes = sel.findAll(n => n.fillStyleId !== "")
    // console.log(nodes)

    nodes.forEach(node => {
      const fillID = node.fillStyleId
      console.log(fillID)
      if(fillID !== undefined) {getStyleName(fillID)}
    })
  })
}


swapStyle()