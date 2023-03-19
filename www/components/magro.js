function calcular(){
    
    var pvalor = parseFloat(document.getElementById("pvalor").value);
    var svalor = parseFloat(document.getElementById("svalor").value);
    var tvalor = parseFloat(document.getElementById("tvalor").value);

    var resultado

    resultado = ( tvalor * svalor) / pvalor

    document.getElementById('resultado').innerHTML = "Resultado de X: " + resultado 

}