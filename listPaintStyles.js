const allStylesAsArray = figma.getLocalPaintStyles()
for (let style of allStylesAsArray) {
  console.log(style.name)
}