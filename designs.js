
//defining variables and assigning values to them.
let heightInput = document.querySelector("#inputHeight");
let widthInput = document.querySelector("#inputWidth");
let pickingColor = document.querySelector("#colorPicker");
let canvas = document.querySelector("#pixelCanvas");

//function that adds rows and cells based on user input of height and width
function make() {
  for ( a = 0; a < heightInput.value; a++){
     createRow = document.createElement("TR");
     height = canvas.appendChild(createRow);

   for ( b = 0; b < widthInput.value; b++){
    createColume = document.createElement("TD");
    createRow.appendChild(createColume);
    }
  }
}

//I added the innerHTML property to canvas and made its value nothing so that when the user resubmits values again, the grid first resets.
function makeApp() {
  canvas.innerHTML = "";
  make();
}

//added the if condition so that the "click" event only works if the user clicks on a td
canvas.addEventListener("click", function(event) {
  if (event.target.nodeName === "TD"){
    event.target.style.backgroundColor = pickingColor.value;
  }
})
