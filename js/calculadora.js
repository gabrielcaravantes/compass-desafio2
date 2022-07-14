function calcular() {
  areaP1 =
    document.getElementById("alturap1").value *
    document.getElementById("largurap1").value;
  areaP2 =
    document.getElementById("alturap2").value *
    document.getElementById("largurap2").value;
  areaP3 =
    document.getElementById("alturap3").value *
    document.getElementById("largurap3").value;
  areaP4 =
    document.getElementById("alturap4").value *
    document.getElementById("largurap4").value;

  var areaParede = areaP1 + areaP2 + areaP3 + areaP4;
  var areaPorta = document.getElementById("quantas-portas").value * (0.8 * 1.9);
  var areaJanela = document.getElementById("quantas-janelas").value * (2 * 1.2);
  var areaPJ = areaPorta + areaJanela;
  var areaTinta = areaParede - areaPJ;
  var tintaNecessaria = areaTinta / 5;

  document.getElementById(
    "calculo"
  ).innerHTML = `A quantidade de tinta necessária é de ${tintaNecessaria} litros`;
}

function mostrarLatas() {
  areaP1 =
    document.getElementById("alturap1").value *
    document.getElementById("largurap1").value;
  areaP2 =
    document.getElementById("alturap2").value *
    document.getElementById("largurap2").value;
  areaP3 =
    document.getElementById("alturap3").value *
    document.getElementById("largurap3").value;
  areaP4 =
    document.getElementById("alturap4").value *
    document.getElementById("largurap4").value;

  var areaParede = areaP1 + areaP2 + areaP3 + areaP4;
  var areaPorta = document.getElementById("quantas-portas").value * (0.8 * 1.9);
  var areaJanela = document.getElementById("quantas-janelas").value * (2 * 1.2);
  var areaPJ = areaPorta + areaJanela;
  var areaTinta = areaParede - areaPJ;
  var tintaNecessaria = areaTinta / 5;

  var latas = document.getElementById("mostrar-latas");

  lata0_5L = 0;
  lata2_5L = 0;
  lata3_6L = 0;
  lata18L = 0;

  while (tintaNecessaria > 0) {
    if (tintaNecessaria > 18) {
      tintaNecessaria = tintaNecessaria - 18;
      lata18L++;
    } else if (tintaNecessaria > 3.6) {
      tintaNecessaria = tintaNecessaria - 3.6;
      lata3_6L++;
    } else if (tintaNecessaria > 2.5) {
      tintaNecessaria = tintaNecessaria - 2.5;
      lata2_5L++;
    } else if (tintaNecessaria > 0.5) {
      tintaNecessaria = tintaNecessaria - 0.5;
      lata0_5L++;
    } else if (tintaNecessaria > 0) {
      tintaNecessaria = 0;
      lata0_5L++;
    }
  }
  latas.innerHTML = `Serão necessárias:<br>${lata18L} latas de 18 litros.<br>${lata3_6L} latas de 3.6 litros.<br>${lata2_5L} latas de 2.5 litros.<br>${lata0_5L} latas de 0.5 litros`;
}

function valida() {
  areaP1 =
    document.getElementById("alturap1").value *
    document.getElementById("largurap1").value;

  if (areaP1 > 50 || areaP1 < 1) {
    alert("Área da parede deve ser maior que 1m² ou menor que 50m²");
    return;
  }
}

function valida2() {
  areaP2 =
    document.getElementById("alturap2").value *
    document.getElementById("largurap2").value;

  if (areaP2 > 50 || areaP2 < 1) {
    alert("Área da parede deve ser maior que 1m² ou menor que 50m²");
    return;
  }
}

function valida3() {
  areaP3 =
    document.getElementById("alturap3").value *
    document.getElementById("largurap3").value;

  if (areaP3 > 50 || areaP3 < 1) {
    alert("Área da parede deve ser maior que 1m² ou menor que 50m²");
    return;
  }
}

function valida4() {
  areaP4 =
    document.getElementById("alturap4").value *
    document.getElementById("largurap4").value;

  if (areaP4 > 50 || areaP4 < 1) {
    alert("Área da parede deve ser maior que 1m² ou menor que 50m²");
    return;
  }
}

function validaPJ() {
  areaP1 =
    document.getElementById("alturap1").value *
    document.getElementById("largurap1").value;
  areaP2 =
    document.getElementById("alturap2").value *
    document.getElementById("largurap2").value;
  areaP3 =
    document.getElementById("alturap3").value *
    document.getElementById("largurap3").value;
  areaP4 =
    document.getElementById("alturap4").value *
    document.getElementById("largurap4").value;

  var areaParede = areaP1 + areaP2 + areaP3 + areaP4;
  var areaPorta = document.getElementById("quantas-portas").value * (0.8 * 1.9);
  var areaJanela = document.getElementById("quantas-janelas").value * (2 * 1.2);
  var areaPJ = areaPorta + areaJanela;

  if (areaPJ > areaParede / 2) {
    alert("Área da porta e janela deve ser no máximo 50% da área da parede");
    return;
  }
}
function validaPorta() {
  var valorPorta = document.getElementById("quantas-portas").value;
  if (valorPorta < 1) {
    alert("O valor mínimo de portas deve ser 1");
    document.getElementById("quantas-portas").value = 1;
    return;
  }
}
