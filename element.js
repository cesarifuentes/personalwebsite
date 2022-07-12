
class MyNavbar extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <div class="buttons">
            <span data-text="Home" class="tooltip">    <form onclick="return bttnClicked('panel-1')"><input type="image" class="btn" src="icons/Furniture_NH_Inv_Icon.png" /></form>   </span> 
            <span data-text="Education" class="tooltip"> <form onclick="return bttnClicked('panel-2')"><input type="image" class="btn" src="icons/Pocketbook_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Work Exp." class="tooltip"> <form onclick="return bttnClicked('panel-3')"><input type="image" class="btn" src="icons/Construction_Helmet_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Projects" class="tooltip"> <form onclick="return bttnClicked('panel-4')"><input type="image" class="btn" src="icons/Dumbbell_NH_Inv_Icon.png" /></form>  </span> 
            <br>
            <span data-text="Leadership" class="tooltip"> <form onclick="return bttnClicked('panel-5')"><input type="image" class="btn" src="icons/Pennant_NH_Inv_Icon.png" /></form>  </span> 
            <span data-text="Skills" class="tooltip"> <form onclick="return bttnClicked('panel-6')"><input type="image" class="btn" src="icons/Slingshot_NH_Inv_Icon.png" />  </form>  </span> 
            <span data-text="Contact" class="tooltip"> <form onclick="return bttnClicked('panel-7')"><input type="image" class="btn" src="icons/Mailbox_NH_Inv_Icon.png" /></form> </span> 
            <span data-text="About" class="tooltip"> <form onclick="return bttnClicked('panel-8')"><input type="image" class="btn" src="icons/Accessory_NH_Inv_Icon.png" /></form>  </span>             
            </div>
        </div>
        `
    }
}
customElements.define('navbar-template', MyNavbar)

class Mypanelhome extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/orange.png');"></div>
        <div class="panel-full" style="background-color: #FFCC59;">
          <div class="titlebox" style="background-color: #f66c21;"><p2>Home</p2></div>
          <div class="textbox">
            <p>Hello! My name is <mark style="color: #f66c21; background:none;">Cesar Fuentes</mark>. I am a senior computer science student at Texas A&M University. <br><br> Have fun checking out my Animal Crossing inspired website!</p>
          </div>
        </div>  
        `
    }
}
customElements.define('panel-home', Mypanelhome)

class Mypaneleducation extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/green.png');"></div>
        <div class="panel-full" style="background-color: #86B049;">
          <div class="titlebox" style="background-color: #476930;"><p2>Education</p2></div>
          <div class="textbox">
            <p>
              Texas A&M University<br>
              B.S. in Computer Science<br>
              May 2023<br><br>
              <mark style="color: #476930; background:none;">Cumulative GPA:</mark><br>
              3.911 out of 4<br><br>
              <mark style="color: #476930; background:none;">Honors/Awards:</mark><br>
              Dean’s Honor (2020-22)<br>
              Van Ross Foundation Scholarship<br>
              Jackie & Jonathan Dierkson Scholarship<br><br>
              <mark style="color: #476930; background:none;">Relevant Coursework:</mark><br> 
              Data Structures & Algorithms<br>
              Discrete Structures for Computing<br>
              Computer Organization<br>
              Programming Languages<br>
              Intro to Computer Systems<br>
              Programming Studio<br>
              Design & Analysis of Algorithms<br>
              Software Engineering<br>
              Computer Graphics<br>
            </p>
          </div>
        </div>        
        `
    }
}
customElements.define('panel-education', Mypaneleducation)

class Mypanelwork extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/pink.png');"></div>
        <div class="panel-full" style="background-color: #E090AD;">
          <div class="titlebox" style="background-color: #039F9B;"><p2>Work Exp.</p2></div>
          <div class="textbox">
            <p>
              Publicis Sapient <br>
              Software Engineering Intern  <br>
              June 2022 – Aug 2022<br>
              Houston, TX<br>
              <br>
              <ul>
                  <li>Assist in the collection and documentation of user requirements as well as the development of user stories and estimates</li>
                  <li>Design, develop and unit test applications in accordance with established standards</li>
                  <li>Collaborate with experience designers, strategists, client partners and clients on the product</li>
                  <li>Participate in peer reviews of solution designs and related code</li>
              </ul>            
            </p>
          </div>
        </div>
        `
    }
}
customElements.define('panel-work', Mypanelwork)

class Mypanelprojects extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/brown.png');"></div>
        <div class="panel-partial" style="background-color: #6CC0DB;">
          <div class="titlebox" style="background-color: #3679B6;"><p2>Projects</p2></div>
          <div class="textbox">
            <p>
              Crowd-Sourced Recommendation System <br>
              Group Project   <br>
              Oct 2021<br>
              Dallas, TX<br>
              <br>
              <ul>
                  <li>Designed and verified a full-stack database application that interfaces between a local application and a cloud-based database.</li>
                  <li>Explored and gained experience with AWS and JDBC.</li>
                  <li>Applied the waterfall development methodology to software design.</li>
              </ul>  
            </p>
          </div>
          <div class="btn-long" style="background-color: #039F9B;"><p2>Back</p2></div>
          <div class="btn-long" style="background-color: #039F9B;"><p2>Next</p2></div>
        </div>
        `
    }
}
customElements.define('panel-projects', Mypanelprojects)


class Mypanelleader extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/blue.png');"></div>
        <div class="panel-partial" style="background-color: #3679B6;">
          <div class="titlebox" style="background-color: #FFB703;"><p2>Leadership</p2></div>
          <div class="textbox">
            <p>
              UNICEF at Texas A&M<br>
              President<br>
              Sep 2019 - Present<br>
              College Station, TX<br>
              <br>
              <ul>
                  <li>Established the club’s overall objectives, mission statement, and value system..</li>
                  <li>Organized fundraising events to raise money for UNICEF, including Bake Sales, Car Washes and Candy Sales.</li>
                  <li>Planned and led club meetings and discussion on humanitarian issues.</li>
                  <li>Delegated tasks to the officer team, ensuring they understand their responsibilities and motivating them to succeed.</li>
                  <li>Volunteered on a bi-weekly basis at local food banks and tutored at elementary schools.</li>
              </ul>  
            </p>
          </div>
        </div>  
        `
    }
}
customElements.define('panel-leader', Mypanelleader)


class Mypanelskills extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/orange.png');"></div>
        <div class="panel-full" style="background-color: #FFCC59;">
          <div class="titlebox" style="background-color: #F66C21;"><p2>Skills</p2></div>
          <div class="textbox">
          <p>
          <mark style="color: #F66C21; background:none;">Programming Languages: </mark><br>
          C++, Java, Swift, Python, HTML, JavaScript, CSS, Ruby (PHP and R?)<br><br>
          <mark style="color: #F66C21; background:none;">Database Management: </mark><br>
          MySQL, SQL (Server 2008, Oracle 8.x/9.x)<br><br>
          <mark style="color: #F66C21; background:none;">Cloud-Based Technologies: </mark><br>
          Azure, Docker, AWS<br><br>
          <mark style="color: #F66C21; background:none;">Open Source Tools: </mark><br>
          Kubernetes, Jenkins<br><br>
          <mark style="color: #F66C21; background:none;">Frameworks: </mark><br>
          Angular, React<br><br>
          <mark style="color: #F66C21; background:none;">Technologies: </mark><br>
          Jira, Git, <br><br>
          <mark style="color: #F66C21; background:none;">Methodologies: </mark><br>
          Agile/Scrum
          </p>
          </div>
        </div>
        `
    }
}
customElements.define('panel-skills', Mypanelskills)

class Mypanelcontact extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/face.png');"></div>
        <div class="panel-full" style="background-color: #C9E265;">
          <div class="titlebox" style="background-color: #687937;"><p2>Contact</p2></div>
          <div class="textbox">
          <br><br><br><br>
          <p>
          Please don't hesitate to contact me! <br>
          I'll reply as soon as I can. <br><br><br>
          <mark style="color: #687937; background:none;">Email</mark><br>
          fuentesivancesar@gmail.com<br><br>
          <mark style="color: #687937; background:none;">Phone</mark><br>
          214.789.0012 
          </p>
          </div>
        </div>
        `
    }
}
customElements.define('panel-contact', Mypanelcontact)

class Mypanelabout extends HTMLElement {
    // called every time this element is connected to a document
    connectedCallback() {
        this.innerHTML = `
        <div class="wallpaper" style="background-image: url('patterns/yellow.png');"></div>
        <div class="panel-full" style="background-color: #C7D957;">
          <div class="titlebox" style="background-color: #687937;"><p2>About Me</p2></div>
          <div class="textbox">
          <br><br><br><br>
          <p>
          As you can probably tell, I'm a very artsy person and I love to incorporate my hobbies into software development.<br><br>On the weekends I love to play games like Animal Crossing, Pokemon, Minecraft, and even Dead by Daylight.<br><br> My hobbies include gardening, sewing, jump roping, and cooking!  <br>
          </p>
          </div>
        </div>
        `
    }
}
customElements.define('panel-about', Mypanelabout)
