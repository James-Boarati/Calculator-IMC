function calcular() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / altura ** 2;
    var texto=""
    if (imc < 18.5) {
        texto="Você está muito magro"
    } else if (imc < 24.9) {
        texto="Você está normal"
    } else if (imc < 29.9) {
        texto="Você está com sobrepeso"
    } else if (imc < 39.9) {
        texto="Você está com obesidade"
    } else if (imc > 39.9) {
        texto="Você está com obesidade mórbida"
    }
    document.getElementById("areadetexto").innerText=texto
}
 