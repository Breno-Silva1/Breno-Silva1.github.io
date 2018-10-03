

function hide() {
  document.getElementById("btn-show1").id = "btn-hide1";
  document.getElementById("btn-hide2").id = "btn-show2";
  document.getElementById("bg").className = "";
}


function show(){
  document.getElementById("btn-show2").id = "btn-hide2";
  document.getElementById("btn-hide1").id = "btn-show1";
  document.getElementById("bg").className = "background";
}
