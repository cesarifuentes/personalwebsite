class MyNavbar extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <div class="buttons">
            <span data-text="Home" class="tooltip">    <form action="/index.html"><input type="image" class="btn" src="icons/Furniture_NH_Inv_Icon.png" /></form>   </span> 
            <form action="/education.html"><input type="image" class="btn" src="icons/Pocketbook_NH_Inv_Icon.png" /></form>
            <form action="/work.html"><input type="image" class="btn" src="icons/Construction_Helmet_NH_Inv_Icon.png" /></form>
            <form action="/projects.html"><input type="image" class="btn" src="icons/Dumbbell_NH_Inv_Icon.png" /></form>
            <br>
            <form action="/leader.html"><input type="image" class="btn" src="icons/Pennant_NH_Inv_Icon.png" /></form>
            <form action="/skills.html"><input type="image" class="btn" src="icons/Slingshot_NH_Inv_Icon.png" />  </form>
            <form action="/contact.html"><input type="image" class="btn" src="icons/Mailbox_NH_Inv_Icon.png" /></form>
            <form action="/about.html"><input type="image" class="btn" src="icons/Accessory_NH_Inv_Icon.png" /></form>
            </div>
        </div>
        `
    }
}
customElements.define('navbar-template', MyNavbar)


  