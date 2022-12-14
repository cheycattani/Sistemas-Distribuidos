
  const urlAdd = 'http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/oportunidade/add';

  // Crie um objeto JSON com os dados que deseja enviar
  const dadosJSON = {
    "nome": "Trabalho 1",
    "fornecedor": {
      "razaoSocial": "Organização padrão",
      "atividadePrincipal": "idk",
      "tipoEmpresa": "OFFG",
      "endereco": {
        "logradouro": "Rua dos Bobos",
        "numero": 0,
        "complemento": "Sem teto, sem nada. Feita com muito esmero.",
        "cidade": "Lugar Nenhum",
        "cep": "00000-666"
      }
    }
  };
  
  // Crie a rota URL para onde deseja enviar os dados
  
  // Faça a requisição HTTP utilizando o método `fetch` e envie os dados JSON
  fetch(urlAdd, {
    method: "POST", // Use o método "POST" para enviar os dados
    body: JSON.stringify(dadosJSON), // Converta os dados JSON em uma string
    headers: {
      "Content-Type": "application/json" // Defina o tipo de conteúdo como JSON
    }
  })
  .then(response => response.json()) // Converta a resposta em um objeto JSON
  .then(responseJSON => {
    // Faça alguma coisa com a resposta JSON aqui
    console.log(responseJSON);
  })
  .catch(error => {
    // Trate o erro aqui
    console.error(error);
  });
  
  
 // Crie um contador para incrementar o valor do campo "nome"
let contador = 0;

// Obtenha a referência ao botão com o ID "submitAdd"
const botao = document.getElementById("submitAdd");

// Adicione um listener de eventos de clique ao botão
botao.addEventListener("click", () => {
  // Incremente o contador
  contador++;

  // Atualize o valor do campo "nome" com o novo valor do contador
  dadosJSON.nome = `Trabalho-${contador}`;

  // Faça a requisição HTTP com o novo valor do campo "nome"
  fetch(urlRota, {
    method: "POST",
    body: JSON.stringify(dadosJSON),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(responseJSON => {
    // Faça alguma coisa com a resposta JSON aqui
    console.log(responseJSON);
  })
  .catch(error => {
    // Trate o erro aqui
    console.error(error);
  });
});