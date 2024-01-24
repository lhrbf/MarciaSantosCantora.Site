// Seu JSON com os dados dos eventos
var dadosEventos = [
  { "data": "25/01", "dia": "Quinta", "horario": "20:00", "local": "Bairro Novo", "evento": "Seu Tchetcho" },
  { "data": "26/01", "dia": "Sexta", "horario": "20:00", "local": "Carmo", "evento": "Manny Deck" },
  { "data": "27/01", "dia": "Sábado", "horario": "13:00", "local": "---", "evento": "Particular" },
  { "data": "27/01", "dia": "Sábado", "horario": "17:00", "local": "---", "evento": "Particular" },
  { "data": "27/01", "dia": "Sábado", "horario": "23:00", "local": "Janga", "evento": "Mini Mundo" },
  { "data": "28/01", "dia": "Domingo", "horario": "18:00", "local": "Janga", "evento": "Boteco do Caranguejo" }
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