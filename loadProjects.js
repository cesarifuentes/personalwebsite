


function optiiShow(){
  hideProjectContent();
  document.getElementById("project-date").textContent = "Houston, Texas • July 2022";
  document.getElementById("project-desc").textContent = "Optimization Engine Interface";
  document.getElementById("project-title").textContent = ""; // Chevron Corporation
  document.getElementById("project-languages").innerHTML = '';
  document.getElementById("project-languages").insertAdjacentHTML( 'afterbegin', `<ion-icon name="logo-angular" size="large"></ion-icon>
                                                                                  <ion-icon name="logo-nodejs" size="large"></ion-icon>
                                                                                  <ion-icon name="logo-python" size="large"></ion-icon>                                                                                  
                                                                                  <object class="custom-ionicon" data="./assets/mysql.svg" type="image/svg+xml"></object>
                                                                                  `);
  document.getElementById("project-list").innerHTML = '';
  document.getElementById("project-list").insertAdjacentHTML( 'afterbegin', `<li>Created a UI that can allows users to select an optimization LP model, perform what-if analysis, and visualize the results.</li>`);
  document.getElementById("project-links").innerHTML = '';
  document.getElementById("project-links").insertAdjacentHTML( 'afterbegin', `<a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="logo-github" size="large"></ion-icon></a>
                                                                              <a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="open" size="large"></ion-icon></a>`);
  document.getElementById("project-image").innerHTML = '';
  document.getElementById("project-image").insertAdjacentHTML( 'afterbegin', `<img class="tablet" src="photos/optii.png">`);
};

function spotifyShow(){
  hideProjectContent();
  document.getElementById("project-date").textContent = "College Station, Texas • Nov 2021";
  document.getElementById("project-desc").textContent = "Spotify Playlist Organizer";
  document.getElementById("project-title").textContent = ""; // Chevron Corporation
  document.getElementById("project-languages").innerHTML = '';
  document.getElementById("project-languages").insertAdjacentHTML( 'afterbegin', `<ion-icon name="logo-html5" size="large"></ion-icon>
                                                                                  <ion-icon name="logo-javascript" size="large"></ion-icon>
                                                                                  <ion-icon name="logo-css3" size="large"></ion-icon>
                                                                                  <ion-icon name="logo-python" size="large"></ion-icon>
                                                                                  <ion-icon name="server" size="large"></ion-icon>`);
  document.getElementById("project-list").innerHTML = '';
  document.getElementById("project-list").insertAdjacentHTML( 'afterbegin', `<li>Designed and verified a publicly hosted web application that integrates multiple APIs to let Spotify users create custom playlists.</li>
                                                                              <li>Employed multiple aspects of accessibility into a software product.</li>
                                                                              <li>Conducted user studies and adapted a software product based on user feedback.</li>`);
  document.getElementById("project-links").innerHTML = '';
  document.getElementById("project-links").insertAdjacentHTML( 'afterbegin', `<a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="logo-github" size="large"></ion-icon></a>
                                                                              <a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="open" size="large"></ion-icon></a>`);
  document.getElementById("project-image").innerHTML = '';
  document.getElementById("project-image").insertAdjacentHTML( 'afterbegin', `<img class="tablet" src="photos/spotify.png">`);
};

function replaceShow(){
  hideProjectContent();
  document.getElementById("project-date").textContent = "Dallas, Texas • Dec 2020";
  document.getElementById("project-desc").textContent = "Reminder Application";
  document.getElementById("project-title").textContent = ""; // Chevron Corporation
  document.getElementById("project-languages").innerHTML = '';
  document.getElementById("project-languages").insertAdjacentHTML( 'afterbegin', `<object class="custom-ionicon" data="./assets/swift.svg" type="image/svg+xml"></object>`);
  document.getElementById("project-list").innerHTML = '';
  document.getElementById("project-list").insertAdjacentHTML( 'afterbegin', `<li>Developed an iOS mobile application to remind people when to replace household items.</li>`);
  document.getElementById("project-links").innerHTML = '';
  document.getElementById("project-links").insertAdjacentHTML( 'afterbegin', `<a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="logo-github" size="large"></ion-icon></a>
                                                                              <a href="https://google.com" target="_blank"><ion-icon class="linkButton" name="open" size="large"></ion-icon></a>`);
  document.getElementById("project-image").innerHTML = '';
  document.getElementById("project-image").insertAdjacentHTML( 'afterbegin', `<img class="tablet" src="">`);
};

function hideProjectContent(){
  var elements = document.getElementsByClassName("project-content")
  for (var i = 0; i < elements.length; i++){
      elements[i].style.display = 'none';
  }
}

