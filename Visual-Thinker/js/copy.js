function copiarTexto(text) {
    
    var texto = text;
    var inputTest = document.createElement("input");
    inputTest.value = texto;

    document.body.appendChild(inputTest);

    inputTest.select();

    document.execCommand('copy');
    document.body.removeChild(inputTest);
}