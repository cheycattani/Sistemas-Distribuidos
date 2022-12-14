const idAluno = prompt('Por favor, informe o ID do aluno:');

//receba a vairavel idAluno por meio de um prompt
// const url = `http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/?id=${idAluno}`;

// faça a requisicao na rota http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/?id=75 e exiba os dados do aluno na tela que possui o seguinte Json
// {
// 		"id": 75,
// 		"nome": "Novo Aluno",
// 		"cpf": "8293485943",
// 		"rg": "928374859",
// 		"matricula": "2929300148",
// 		"campus": "ITAJUBA",
// 		"telefone": "78998777463",
// 		"email": "teste@email.com",
// 		"professorId": 35
// 	}


const url = `http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/?id=${idAluno}`;


fetch(url)
  .then(response => response.json())
  .then(data => {
    // Aqui, `aluno` é o objeto JSON retornado pela rota
    // Você pode usar os dados do aluno para criar elementos HTML
    // e exibi-los na página. Por exemplo:
    const aluno = data[0]
  const div = document.createElement('div');
  div.classList.add('info_card');

    const nomeAluno = document.createElement('h1');
nomeAluno.textContent = aluno.nome;
nomeAluno.classList.add('nome-aluno');

const cpfAluno = document.createElement('p');
cpfAluno.textContent = `CPF: ${aluno.cpf}`;
cpfAluno.classList.add('cpf-aluno');

const rgAluno = document.createElement('p');
rgAluno.textContent = `RG: ${aluno.rg}`;
rgAluno.classList.add('rg-aluno');

const matriculaAluno = document.createElement('p');
matriculaAluno.textContent = `Matricula: ${aluno.matricula}`;
matriculaAluno.classList.add('matricula-aluno');

const campusAluno = document.createElement('p');
campusAluno.textContent = `Campus: ${aluno.campus}`;
campusAluno.classList.add('campus-aluno');

const telefoneAluno = document.createElement('p');
telefoneAluno.textContent = `Telefone: ${aluno.telefone}`;
telefoneAluno.classList.add('telefone-aluno');

    const emailAluno = document.createElement('p');
    emailAluno.textContent = `Email: ${aluno.email}`;
    emailAluno.classList.add('email-aluno');

    const professorId = document.createElement('p');
    professorId.textContent = `Professor ID: ${aluno.professorId}`;
    professorId.classList.add('professor-id');



    div.appendChild(nomeAluno);
    div.appendChild(cpfAluno);
    div.appendChild(rgAluno);
    div.appendChild(matriculaAluno);
    div.appendChild(campusAluno);
    div.appendChild(telefoneAluno);
    div.appendChild(emailAluno);
    div.appendChild(professorId);
    document.body.appendChild(div);

  });

  
  fetch(urlprofessor)
    .then(response => response.json()) // Converte a resposta em um objeto JSON
    .then(data => {
      // Pega o primeiro (e único) item do array
      const professor = data[0];
      // console.log(professor);
  
      const element = document.getElementById('professorNome');

    // Atribui o nome do professor ao elemento, precedido pelo texto "Olá,"
    element.innerHTML = `Olá, ${professor.nome}`;
    });







  
