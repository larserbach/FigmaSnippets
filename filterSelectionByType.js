

function filterSelectionByType()
{
  const sel = figma.currentPage.selection;
  var textNodes = []

  sel.forEach( i => {
    const nodeType = i.type;
      
      
      if(nodeType === 'TEXT'){
          //console.log(nodeType)
            textNodes.push(i)
      }
  })

figma.currentPage.selection = textNodes
}
filterSelectionByType()

/*

type NodeType =
  "BOOLEAN_OPERATION" |
  "CODE_BLOCK" |
  "COMPONENT" |
  "COMPONENT_SET" |
  "CONNECTOR" |
  "DOCUMENT" |
  "ELLIPSE" |
  "EMBED" |
  "FRAME" |
  "GROUP" |
  "INSTANCE" |
  "LINE" |
  "LINK_UNFURL" |
  "MEDIA" |
  "PAGE" |
  "POLYGON" |
  "RECTANGLE" |
  "SHAPE_WITH_TEXT" |
  "SLICE" |
  "STAMP" |
  "STAR" |
  "STICKY" |
  "TABLE" |
  "TABLE_CELL" |
  "TEXT" |
  "VECTOR" |
  "WIDGET"

  */