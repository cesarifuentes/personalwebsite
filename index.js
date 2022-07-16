class MyNavbar extends HTMLElement {
  // called every time this element is connected to a document
  connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
          <a class="navbar-brand abs" href="#"><ion-icon class="brand" name="bug" size="large"></ion-icon></a>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
              <span class="navbar-toggler-icon">
                <ion-icon name="menu" size="large"></ion-icon>
              </span>            
          </button>
          <div class="navbar-collapse collapse" id="collapseNavbar">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/Home.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/Education.html">Education</a></li>
                <li class="nav-item"><a class="nav-link" href="/Experience.html">Experience</a></li>
                <li class="nav-item"><a class="nav-link" href="/Projects.html">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="/Skills.html">Skills</a></li>
                <li class="nav-item"><a class="nav-link" href="/Leadership.html">Leadership</a></li>
                <li class="nav-item"><a class="nav-link" href="/Contact.html">Contact</a></li>
              </ul>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal"><ion-icon name="logo-linkedin" size="large"></ion-icon></a></li>
                <li class="nav-item"><a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal"><ion-icon name="logo-github" size="large"></ion-icon></a></li>
              </ul>
          </div>
      </div>
    </nav>`
  }
}
customElements.define('navbar-template', MyNavbar)

    