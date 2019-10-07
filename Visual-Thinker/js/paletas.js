var divs = ["primeiro", "segundo", "terceiro", "quarto", "quinto"];

var bprimeiro = ["#8c2034", "#96c5b5", "#699d9b", "#95cec8", "#bb4305", "#9faef8", "#484754", "#000000", "#1d3188", "#244572"];
var bsegundo  = ["#2a401a", "#ffdebd", "#f7ef20", "#b7c82a", "#f72d31", "#7bf0ef", "#ceb9ae", "#fdb410", "#0a439a", "#3ec6d6"];
var bterceiro = ["#d9b855", "#d16a65", "#fafcfb", "#e0e7a1", "#e3b993", "#f693ab", "#d9dee4", "#dbf848", "#8cd4f9", "#fee687"];
var bquarto   = ["#bf4949", "#fddf4b", "#dce2e0", "#a9b6ed", "#ac2546", "#fc9b76", "#e3dec2", "#c72593", "#f6d392", "#ffde5b"];
var bquinto   = ["#f2f2f2", "#242424", "#96b46c", "#596aa3", "#0f3751", "#dd0f21", "#dac5a1", "#4147ac", "#8d4c41", "#fa671c"];

function setBackground(n) {
  document.getElementById('primeiro').style.backgroundColor = bprimeiro[n];
  document.getElementById('segundo').style.backgroundColor = bsegundo[n];
  document.getElementById('terceiro').style.backgroundColor = bterceiro[n];
  document.getElementById('quarto').style.backgroundColor = bquarto[n];
  document.getElementById('quinto').style.backgroundColor = bquinto[n];

  document.getElementById('sub-paletas').className = "row hidden";

  for(i = 0; i <= 4; i++) 
      document.getElementById(divs[i]).className = "col-12 paleta";  
}

var sbprimeiro = ["hsla(349, 63%, 14%, 1)", "hsl(95, 42%, 0%, 1)", "hsl(45, 63%, 39%)", "hsl(0, 48%, 32%)", "hsl(0, 0%, 75%)"];
var sbsegundo  = ["hsla(349, 63%, 24%, 1)", "hsl(95, 42%, 8%, 1)", "hsl(45, 63%, 49%)", "hsl(0, 48%, 42%)", "hsl(0, 0%, 85%)"];
var sbterceiro = ["hsla(349, 63%, 34%, 1)", "hsl(95, 42%, 18%, 1)", "hsl(45, 63%, 59%)", "hsl(0, 48%, 52%)", "hsl(0, 0%, 95%)"];
var sbquarto   = ["hsla(349, 63%, 44%, 1)", "hsl(95, 42%, 28%, 1)", "hsl(45, 63%, 69%)", "hsl(0, 48%, 62%)", "hsl(0, 0%, 100%)"];
var sbquinto   = ["hsla(349, 63%, 54%, 1)", "hsl(95, 42%, 38%, 1)", "hsl(45, 63%, 79%)", "hsl(0, 48%, 72%)", "hsl(0, 0%, 100%)"];

function setBackgroundSub(n) {
  document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro[n];
  document.getElementById('ssegundo').style.backgroundColor = sbsegundo[n];
  document.getElementById('sterceiro').style.backgroundColor = sbterceiro[n];
  document.getElementById('squarto').style.backgroundColor = sbquarto[n];
  document.getElementById('squinto').style.backgroundColor = sbquinto[n];
  document.getElementById('sub-paletas').className = "row";

  document.getElementById(divs[n]).className = "col-12 paleta active";
  
  for(i = 0; i <= 4; i++) 
    if (i != n) 
      document.getElementById(divs[i]).className = "col-12 paleta";  


}

function clicksub(){
  for(i = 0; i <= 4; i++) 
    document.getElementsByClassName('sub-info')[i].className = "col-12 p-0 line-2 sub-info";  
}

function copiar(){
  setTimeout(function() { alert("Copiado! ✓"); }, 60);
}