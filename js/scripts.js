onload = function() {
  let myForm = document.querySelector("form");
  let previousSelection = "";

  myForm.onsubmit = function(event) {
    event.preventDefault();
    const selection = document.getElementById("exhibit").value;
    let divquery = document.querySelector("div.show"); //look for div .show in the document
    if(divquery != null) {
      document.body.removeChild(divquery); //hide any showing ones
    }

    let showquery = document.querySelector("ul.animals>li#" + selection);
    if(showquery != null) {
      var slide = document.createElement("div");
      slide.setAttribute("class", "show")
      slide.innerHTML = "<img src=\"img/"+selection+".jpg\">" + "<p> The " + selection + " is lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus maiores quibusdam, similique quod, expedita provident voluptate reprehenderit blanditiis nam sunt animi quam, adipisci nostrum rerum illo enim debitis corporis</p>";
      document.body.appendChild(slide);
    } else {
      window.alert("There is no exhibit for "+ selection);
    }

  }
}