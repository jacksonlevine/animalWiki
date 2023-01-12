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
      let rvalue = Math.random()*99;
      let gvalue = Math.random()*99;
      let bvalue = Math.random()*99;
      slide.style.backgroundColor = "rgb(" + rvalue + "," + gvalue + "," + bvalue + ")";
      slide.style.color = "rgb(" + (255-rvalue) + "," + (255-gvalue) + ",255)"
      slide.style.borderColor = "rgb(" + (255-rvalue) + "," + (255-gvalue) + ",255)"
      document.body.appendChild(slide);
    } else {
      window.alert("There is no exhibit for "+ selection);
    }

  }
}