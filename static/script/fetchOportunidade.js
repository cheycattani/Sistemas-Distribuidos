// Remover o card original da página
const originalCard = document.querySelector(".card");
originalCard.parentNode.removeChild(originalCard);

// Fazer a chamada à rota
fetch("http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/oportunidade/")
  .then(response => response.json())
  .then(data => {
    // Para cada item no array retornado pela rota
    data.forEach(item => {
      // Clonar o card
      const card = originalCard.cloneNode(true);

      // Adicionar o nome do item no card-title
      card.querySelector(".card-title").innerText = item.nome;

      // Adicionar a razão social no card-description
      card.querySelector(".card-description").innerText = item.fornecedor.razaoSocial;

      // Adicionar o card clonado na página
      document.body.appendChild(card);
    });
  });
