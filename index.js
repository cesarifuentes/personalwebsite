class MyNavbar extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <div class="buttons">
            <span data-text="Home" class="tooltip">    <form action="/index.html"><input type="image" class="btn" src="icons/Furniture_NH_Inv_Icon.png" /></form>   </span> 
            <span data-text="Education" class="tooltip"> <form action="/education.html"><input type="image" class="btn" src="icons/Pocketbook_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Work Exp." class="tooltip"> <form action="/work.html"><input type="image" class="btn" src="icons/Construction_Helmet_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Projects" class="tooltip"> <form action="/projects.html"><input type="image" class="btn" src="icons/Dumbbell_NH_Inv_Icon.png" /></form>  </span> 
            <br>
            <span data-text="Leadership" class="tooltip"> <form action="/leader.html"><input type="image" class="btn" src="icons/Pennant_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Skills" class="tooltip"> <form action="/skills.html"><input type="image" class="btn" src="icons/Slingshot_NH_Inv_Icon.png" />  </form>  </span> 
            <span data-text="Contact" class="tooltip"> <form action="/contact.html"><input type="image" class="btn" src="icons/Mailbox_NH_Inv_Icon.png" /></form> </span> 
            <span data-text="About" class="tooltip"> <form action="/about.html"><input type="image" class="btn" src="icons/Accessory_NH_Inv_Icon.png" /></form>  </span> 
            </div>
        </div>
        `
    }
}
customElements.define('navbar-template', MyNavbar)


  