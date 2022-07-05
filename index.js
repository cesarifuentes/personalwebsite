

function bttnClicked(panelID) {

    // TODO: change character animation
    // TODO: page animation from top
    showPanel(panelID)
}

function showPanel(panelID) {

    document.querySelectorAll('#panels > div').forEach(el => { 
        el.style.display = (el.id === panelID) ? 'block' : 'none' 
        if (el.style.display == 'block') {
            alert("Visible: " + panelID)
        }
    })


    
}