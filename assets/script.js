// Seu JSON com os dados dos eventos
var dadosEventos = [
  { "data": "21/02", "dia": "Quarta", "horario": "19:00", "local": "Olinda", "evento": "Na Casa D´Mãe" },
  { "data": "22/02", "dia": "Quinta", "horario": "20:00", "local": "Olinda", "evento": "Seu Tchetcho" },
  { "data": "23/02", "dia": "Sexta", "horario": "20:00", "local": "Olinda", "evento": "Manny Deck" },
  { "data": "24/02", "dia": "Sábado", "horario": "20:00", "local": "Paulista", "evento": "Mini Mundo" },
  { "data": "25/02", "dia": "Domingo", "horario": "14:00", "local": "Paulista", "evento": "Maria Bonita" }
  // Adicione mais eventos conforme necessário
];

// Função para preencher a tabela
function preencherTabela() {
  var corpoTabela = document.getElementById("tabelaEventos").getElementsByTagName('tbody')[0];
  var cabecalhoTabela = document.getElementById("cabecalhoTabela");

  // Criar dinamicamente os títulos das colunas
  var thRow = cabecalhoTabela.insertRow(0);
  for (var key in dadosEventos[0]) {
    if (dadosEventos[0].hasOwnProperty(key)) {
      var th = document.createElement("th");
      th.innerHTML = key.charAt(0).toUpperCase() + key.slice(1); // Capitalizar a primeira letra
      thRow.appendChild(th);
    }
  }

  // Preencher a tabela com os dados do JSON
  for (var i = 0; i < dadosEventos.length; i++) {
    var linha = corpoTabela.insertRow(i);

    for (var key in dadosEventos[i]) {
      if (dadosEventos[i].hasOwnProperty(key)) {
        var celula = linha.insertCell();
        celula.innerHTML = dadosEventos[i][key];
      }
    }
  }
}

// Chame a função para preencher a tabela
preencherTabela();