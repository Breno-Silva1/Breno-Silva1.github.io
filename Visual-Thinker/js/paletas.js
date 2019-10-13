var img = 0;
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

  img = n;
  console.log("n: " + n);
  document.getElementById('sub-paletas').className = "row hidden";

  for(i = 0; i <= 4; i++) 
      document.getElementById(divs[i]).className = "col-12 paleta";  
}

var sbprimeiro0 = ["hsla(349, 63%, 14%, 1)", "hsl(95, 42%, 0%, 1)", "hsl(45, 63%, 39%)", "hsl(0, 48%, 32%)", "hsl(0, 0%, 75%)"];
var sbsegundo0  = ["hsla(349, 63%, 24%, 1)", "hsl(95, 42%, 8%, 1)", "hsl(45, 63%, 49%)", "hsl(0, 48%, 42%)", "hsl(0, 0%, 85%)"];
var sbterceiro0 = ["hsla(349, 63%, 34%, 1)", "hsl(95, 42%, 18%, 1)", "hsl(45, 63%, 59%)", "hsl(0, 48%, 52%)", "hsl(0, 0%, 95%)"];
var sbquarto0   = ["hsla(349, 63%, 44%, 1)", "hsl(95, 42%, 28%, 1)", "hsl(45, 63%, 69%)", "hsl(0, 48%, 62%)", "hsl(0, 0%, 100%)"];
var sbquinto0   = ["hsla(349, 63%, 54%, 1)", "hsl(95, 42%, 38%, 1)", "hsl(45, 63%, 79%)", "hsl(0, 48%, 72%)", "hsl(0, 0%, 100%)"];

var sbprimeiro1 = ["hsla(160, 29%, 48%, 1)", "hsla(30, 100%, 67%, 1)", "hsla(3, 54%, 41%, 1)", "hsl(50, 98%, 44%, 1)", "hsl(0, 0%, 0%, 1)"];
var sbsegundo1  = ["hsla(160, 29%, 58%, 1)", "hsla(30, 100%, 77%, 1)", "hsla(3, 54%, 51%, 1)", "hsl(50, 98%, 54%, 1)", "hsl(0, 0%, 4%, 1)"];
var sbterceiro1 = ["hsla(160, 29%, 68%, 1)", "hsla(30, 100%, 87%, 1)", "hsla(3, 54%, 61%, 1)", "hsl(50, 98%, 64%, 1)", "hsl(0, 0%, 14%, 1)"];
var sbquarto1   = ["hsla(160, 29%, 78%, 1)", "hsla(30, 100%, 97%, 1)", "hsla(3, 54%, 71%, 1)", "hsl(50, 98%, 74%, 1)", "hsl(0, 0%, 24%, 1)"];
var sbquinto1   = ["hsla(160, 29%, 88%, 1)", "hsla(30, 100%, 100%, 1)", "hsla(3, 54%, 81%, 1)", "hsl(50, 98%, 84%, 1)", "hsl(0, 0%, 34%, 1)"];

var sbprimeiro2 = ["hsla(178, 21%, 31%, 1)", "hsl(58, 93%, 35%)", "hsl(150, 25%, 78%)", "hsl(160, 9%, 67%)", "hsl(85, 32%, 36%)"];
var sbsegundo2  = ["hsla(178, 21%, 41%, 1)", "hsl(58, 93%, 45%)", "hsl(150, 25%, 88%)", "hsl(160, 9%, 77%)", "hsl(85, 32%, 46%)"];
var sbterceiro2 = ["hsla(178, 21%, 51%, 1)", "hsl(58, 93%, 55%)", "hsl(150, 25%, 98%)", "hsl(160, 9%, 87%)", "hsl(85, 32%, 56%)"];
var sbquarto2   = ["hsla(178, 21%, 61%, 1)", "hsl(58, 93%, 65%)", "hsl(150, 25%, 100%)", "hsl(160, 9%, 97%)", "hsl(85, 32%, 66%)"];
var sbquinto2   = ["hsla(178, 21%, 71%, 1)", "hsl(58, 93%, 75%)", "hsl(150, 25%, 100%)", "hsl(160, 9%, 100%)", "hsl(85, 32%, 76%)"];

var sbprimeiro3 = ["hsla(174, 37%, 50%, 1)", "hsl(66, 65%, 27%, 1)", "hsl(66, 59%, 57%, 1)", "hsl(229, 65%, 60%, 1)", "hsl(226, 29%, 29%, 1)"];
var sbsegundo3  = ["hsla(174, 37%, 60%, 1)", "hsl(66, 65%, 37%, 1)", "hsl(66, 59%, 67%, 1)", "hsl(229, 65%, 70%, 1)", "hsl(226, 29%, 39%, 1)"];
var sbterceiro3 = ["hsla(174, 37%, 70%, 1)", "hsl(66, 65%, 47%, 1)", "hsl(66, 59%, 77%, 1)", "hsl(229, 65%, 80%, 1)", "hsl(226, 29%, 49%, 1)"];
var sbquarto3   = ["hsla(174, 37%, 80%, 1)", "hsl(66, 65%, 57%, 1)", "hsl(66, 59%, 87%, 1)", "hsl(229, 65%, 90%, 1)", "hsl(226, 29%, 59%, 1)"];
var sbquinto3   = ["hsla(174, 37%, 90%, 1)", "hsl(66, 65%, 67%, 1)", "hsl(66, 59%, 97%, 1)", "hsl(229, 65%, 100%, 1)", "hsl(226, 29%, 69%, 1)"];

var sbprimeiro4 = ["hsla(20, 95%, 18%, 1)", "hsl(359, 93%, 37%, 1)", "hsl(28, 59%, 53%, 1)", "hsl(345, 65%, 21%, 1)", "hsl(204, 69%, 0%, 1)"];
var sbsegundo4  = ["hsla(20, 95%, 28%, 1)", "hsl(359, 93%, 47%, 1)", "hsl(28, 59%, 63%, 1)", "hsl(345, 65%, 31%, 1)", "hsl(204, 69%, 9%, 1)"];
var sbterceiro4 = ["hsla(20, 95%, 38%, 1)", "hsl(359, 93%, 57%, 1)", "hsl(28, 59%, 73%, 1)", "hsl(345, 65%, 41%, 1)", "hsl(204, 69%, 19%, 1)"];
var sbquarto4   = ["hsla(20, 95%, 48%, 1)", "hsl(359, 93%, 67%, 1)", "hsl(28, 59%, 83%, 1)", "hsl(345, 65%, 51%, 1)", "hsl(204, 69%, 29%, 1)"];
var sbquinto4   = ["hsla(20, 95%, 58%, 1)", "hsl(359, 93%, 77%, 1)", "hsl(28, 59%, 93%, 1)", "hsl(345, 65%, 61%, 1)", "hsl(204, 69%, 39%, 1)"];

var sbprimeiro5 = ["hsla(230, 86%, 60%, 1)", "hsl(179, 80%, 51%, 1)", "hsl(345, 85%, 57%, 1)", "hsl(17, 96%, 53%, 1)", "hsl(355, 87%, 26%, 1)"];
var sbsegundo5  = ["hsla(230, 86%, 70%, 1)", "hsl(179, 80%, 61%, 1)", "hsl(345, 85%, 67%, 1)", "hsl(17, 96%, 63%, 1)", "hsl(355, 87%, 36%, 1)"];
var sbterceiro5 = ["hsla(230, 86%, 80%, 1)", "hsl(179, 80%, 71%, 1)", "hsl(345, 85%, 77%, 1)", "hsl(17, 96%, 73%, 1)", "hsl(355, 87%, 46%, 1)"];
var sbquarto5   = ["hsla(230, 86%, 90%, 1)", "hsl(179, 80%, 81%, 1)", "hsl(345, 85%, 87%, 1)", "hsl(17, 96%, 83%, 1)", "hsl(355, 87%, 56%, 1)"];
var sbquinto5   = ["hsla(230, 86%, 100%, 1)", "hsl(179, 80%, 91%, 1)", "hsl(345, 85%, 97%, 1)", "hsl(17, 96%, 93%, 1)", "hsl(355, 87%, 66%, 1)"];

var sbprimeiro6 = ["hsl(245, 8%, 10%, 1)", "hsl(21, 25%, 55%, 1)", "hsl(213, 17%, 67%, 1)", "hsl(51, 37%, 63%, 1)", "hsl(38, 44%, 54%, 1)"];
var sbsegundo6  = ["hsl(245, 8%, 20%, 1)", "hsl(21, 25%, 65%, 1)", "hsl(213, 17%, 77%, 1)", "hsl(51, 37%, 73%, 1)", "hsl(38, 44%, 64%, 1)"];
var sbterceiro6 = ["hsl(245, 8%, 30%, 1)", "hsl(21, 25%, 75%, 1)", "hsl(213, 17%, 87%, 1)", "hsl(51, 37%, 83%, 1)", "hsl(38, 44%, 74%, 1)"];
var sbquarto6   = ["hsl(245, 8%, 40%, 1)", "hsl(21, 25%, 85%, 1)", "hsl(213, 17%, 97%, 1)", "hsl(51, 37%, 93%, 1)", "hsl(38, 44%, 84%, 1)"];
var sbquinto6   = ["hsl(245, 8%, 50%, 1)", "hsl(21, 25%, 95%, 1)", "hsl(213, 17%, 100%, 1)", "hsl(51, 37%, 100%, 1)", "hsl(38, 44%, 94%, 1)"];

var sbprimeiro7 = ["hsl(0, 0%, 0%)", "hsl(42, 98%, 33%)", "hsl(70, 93%, 43%)", "hsl(319, 69%, 26%)", "hsl(237, 45%, 26%)"];
var sbsegundo7  = ["hsl(0, 0%, 0%)", "hsl(42, 98%, 43%)", "hsl(70, 93%, 53%)", "hsl(319, 69%, 36%)", "hsl(237, 45%, 36%)"];
var sbterceiro7 = ["hsl(0, 0%, 0%)", "hsl(42, 98%, 53%)", "hsl(70, 93%, 63%)", "hsl(319, 69%, 46%)", "hsl(237, 45%, 46%)"];
var sbquarto7   = ["hsl(0, 0%, 10%)", "hsl(42, 98%, 63%)", "hsl(70, 93%, 73%)", "hsl(319, 69%, 56%)", "hsl(237, 45%, 56%)"];
var sbquinto7   = ["hsl(0, 0%, 20%)", "hsl(42, 98%, 73%)", "hsl(70, 93%, 83%)", "hsl(319, 69%, 66%)", "hsl(237, 45%, 66%)"];

var sbprimeiro8 = ["hsl(229, 65%, 12%)", "hsl(216, 88%, 12%)", "hsl(200, 90%, 56%)", "hsl(39, 85%, 57%)", "hsl(9, 37%, 20%)"];
var sbsegundo8  = ["hsl(229, 65%, 22%)", "hsl(216, 88%, 22%)", "hsl(200, 90%, 66%)", "hsl(39, 85%, 67%)", "hsl(9, 37%, 30%)"];
var sbterceiro8 = ["hsl(229, 65%, 32%)", "hsl(216, 88%, 32%)", "hsl(200, 90%, 76%)", "hsl(39, 85%, 77%)", "hsl(9, 37%, 40%)"];
var sbquarto8   = ["hsl(229, 65%, 42%)", "hsl(216, 88%, 52%)", "hsl(200, 90%, 86%)", "hsl(39, 85%, 87%)", "hsl(9, 37%, 50%)"];
var sbquinto8   = ["hsl(229, 65%, 52%)", "hsl(216, 88%, 42%)", "hsl(200, 90%, 96%)", "hsl(39, 85%, 97%)", "hsl(9, 37%, 60%)"];

var sbprimeiro9 = ["hsl(215, 52%, 9%)",  "hsl(186, 65%, 34%)", "hsl(48, 98%, 56%)", "hsl(48, 100%, 48%)", "hsl(20, 96%, 35%)"];
var sbsegundo9  = ["hsl(215, 52%, 19%)", "hsl(186, 65%, 44%)", "hsl(48, 98%, 66%)", "hsl(48, 100%, 58%)", "hsl(20, 96%, 45%)"];
var sbterceiro9 = ["hsl(215, 52%, 29%)", "hsl(186, 65%, 54%)", "hsl(48, 98%, 76%)", "hsl(48, 100%, 68%)", "hsl(20, 96%, 55%)"];
var sbquarto9   = ["hsl(215, 52%, 39%)", "hsl(186, 65%, 64%)", "hsl(48, 98%, 86%)", "hsl(48, 100%, 78%)", "hsl(20, 96%, 65%)"];
var sbquinto9   = ["hsl(215, 52%, 49%)", "hsl(186, 65%, 74%)", "hsl(48, 98%, 96%)", "hsl(48, 100%, 88%)", "hsl(20, 96%, 75%)"];


function setBackgroundSub(n) {

  if (img === 0) {
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro0[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo0[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro0[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto0[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto0[n];
  } else if (img === 1){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro1[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo1[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro1[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto1[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto1[n];
  } else if (img === 2){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro2[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo2[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro2[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto2[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto2[n];
  } else if (img === 3){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro3[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo3[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro3[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto3[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto3[n];
  } else if (img === 4){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro4[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo4[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro4[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto4[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto4[n];
  } else if (img === 5){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro5[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo5[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro5[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto5[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto5[n];
  } else if (img === 6){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro6[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo6[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro6[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto6[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto6[n];
  } else if (img === 7){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro7[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo7[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro7[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto7[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto7[n];
  } else if (img === 8){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro8[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo8[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro8[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto8[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto8[n];
  } else if (img === 9){
    document.getElementById('sprimeiro').style.backgroundColor = sbprimeiro9[n];
    document.getElementById('ssegundo').style.backgroundColor  = sbsegundo9[n];
    document.getElementById('sterceiro').style.backgroundColor = sbterceiro9[n];
    document.getElementById('squarto').style.backgroundColor   = sbquarto9[n];
    document.getElementById('squinto').style.backgroundColor   = sbquinto9[n];
  }
  

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