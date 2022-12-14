
function getAlunos(){
  
  return fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/')
  .then(response => response.json())
  .then(alunos => console.log(alunos))
  .catch(err => console.log(err))

}

function getAlunosbyId(){
  fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/?id=23')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
  
}

function postAluno () {
  const form = document.getElementById('cadastroForm');
  let data = {
    nome: form.elements['name'].value,
    cpf: form.elements['cpf'].value,
    rg: form.elements['rg'].value,
    matricula: form.elements['tuition'].value,
    curso: form.elements['course'].value,
    campus: form.elements['campus'].value,
    telefone: 55778899,
    email: form.elements['mail'].value,
    professorId: 1,
    curosId: 1
  }

  fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/add', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })

  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))
  
}



// alunos = getAlunos()
// id = getAlunosbyId()
// console.log(id);
// if (window.location.pathname === "/templates/orientador.html") {
  // O usuário está na página desejada
  var idprofessor = prompt('Insira seu número de ID');
// }

const url = 'http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/'

// Remover o box original da página
const originalBox = document.querySelector("#box");
// originalBox.parentNode.removeChild(originalBox);


  fetch(url)
  .then(response => response.json())
  .then(students => {
    const boxes = document.getElementById('box');
    const body = document.getElementById('body');
    students.forEach(student => {
      // console.log(idprofessor);
      if (student.professorId == idprofessor) {      
      var newDiv = boxes.cloneNode(true);
      const nameTd = document.querySelector('#name');
      nameTd.innerHTML = student.nome;
      const emailTd = document.querySelector('#email');
      emailTd.innerHTML = student.email;
      const matriculaTd = document.querySelector('#matricula');
      matriculaTd.innerHTML = student.matricula;
      const campusTd = document.querySelector('#campus');
      campusTd.innerHTML = student.campus;
      const cpfTd = document.querySelector('#cpf');
      cpfTd.innerHTML = student.cpf;
      const telefoneTd = document.querySelector('#telefone');
      telefoneTd.innerHTML = student.telefone;
      body.appendChild(newDiv);
    }
    });
  });

  const urlprofessor = `http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/professores/?id=${idprofessor}`;
  
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
