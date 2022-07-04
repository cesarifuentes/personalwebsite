
function bttnClicked(panelID) {
    // TODO: change character animation
    // TODO: page animation from top
    ShowPanel(panelID)
}

function ShowPanel(panelID) {
    document.querySelectorAll('#right-side > div').forEach(el => { el.style.display = (el.id === panelID) ? 'block' : 'none' })
}

  