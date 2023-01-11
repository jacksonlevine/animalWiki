onload = function() {
  let myForm = document.querySelector("form");
  let previousSelection = "";

  myForm.onsubmit = function(event) {
    event.preventDefault();
    const selection = document.getElementById("exhibit").value;
    let divquery = document.querySelector("div.show"); //look for div .show in the document
    if(divquery != null) {
      divquery.setAttribute("class", "hidden") //hide any showing ones
    }

    let showquery = document.querySelector("div#" + selection);
    if(showquery != null) {
      showquery.setAttribute("class", "show")
    } else {
      window.alert("There is no exhibit for "+ selection);
    }

  }
}