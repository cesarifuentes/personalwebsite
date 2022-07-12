
function bttnClicked(panelID) {
  // TODO: change character animation
  // TODO: page animation from top
  return showPanel(panelID)
}

function showPanel(panelID) {
  const collection = document.getElementsByClassName("panel");
  for (let i = 0; i < collection.length; i++) {
      temp = collection[i];
      temp.style.display = (temp.id === panelID) ? 'block' : 'none'
  }
  return false;
}
