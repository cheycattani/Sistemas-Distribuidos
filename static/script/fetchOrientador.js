
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

// fetch(url)
//   .then(response => response.json())
//   .then(students => {
//     const body = document.getElementById('body');
//     students.forEach(student => {
//       if (student.professorId == idprofessor) {      
//         var newDiv = document.querySelector('#box').cloneNode(true);

//         // Adiciona event listener ao elemento <span> com o id "negar"
//         // dentro da nova caixa criada
//         newDiv.querySelector('#negar').addEventListener('click', () => {
//           newDiv.remove();
//         });

//         const nameTd = newDiv.querySelector('#name');
//         nameTd.innerHTML = student.nome;
//         const emailTd = newDiv.querySelector('#email');
//         emailTd.innerHTML = student.email;
//         const matriculaTd = newDiv.querySelector('#matricula');
//         matriculaTd.innerHTML = student.matricula;
//         const campusTd = newDiv.querySelector('#campus');
//         campusTd.innerHTML = student.campus;
//         const cpfTd = newDiv.querySelector('#cpf');
//         cpfTd.innerHTML = student.cpf;
//         const telefoneTd = newDiv.querySelector('#telefone');
//         telefoneTd.innerHTML = student.telefone;
//         body.appendChild(newDiv);
//     }
//     });
//   });


//   const urlprofessor = `http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/professores/?id=${idprofessor}`;
  
//   fetch(urlprofessor)
//     .then(response => response.json()) // Converte a resposta em um objeto JSON
//     .then(data => {
//       // Pega o primeiro (e único) item do array
//       const professor = data[0];
//       // console.log(professor);
  
//       const element = document.getElementById('professorNome');

//     // Atribui o nome do professor ao elemento, precedido pelo texto "Olá,"
//     element.innerHTML = `Olá, ${professor.nome}`;
//     });

    const negarSpan = document.querySelector('#negar');

negarSpan.addEventListener('click', () => {
  const boxElement = document.querySelector('#box');
  boxElement.remove();
});

// Adiciona event listener ao elemento <span> com o id "permitir"



fetch(url)
  .then(response => response.json())
  .then(students => {
    const body = document.getElementById('body');
    const bodyAccept = document.getElementById('body-accept');

    students.forEach(student => {
      if (student.professorId == idprofessor) {      
        var newDiv = document.querySelector('#box').cloneNode(true);

        // Adiciona event listener ao elemento <span> com o id "negar"
        // dentro da nova caixa criada
        newDiv.querySelector('#negar').addEventListener('click', () => {
          newDiv.remove();
        });

        // Adiciona event listener ao elemento <span> com o id "permitir"
        // dentro da nova caixa criada
        newDiv.querySelector('#permitir').addEventListener('click', () => {
          // Clona o elemento <tr> com o id "box-accept"
          var newDivAccept = document.querySelector('#box-accept').cloneNode(true);

          // Preenche os elementos filhos com os dados do aluno
          newDivAccept.querySelector('#name-accept').innerHTML = student.nome;
          newDivAccept.querySelector('#email-accept').innerHTML = student.email;
          newDivAccept.querySelector('#matricula-accept').innerHTML = student.matricula;
          newDivAccept.querySelector('#campus-accept').innerHTML = student.campus;
          newDivAccept.querySelector('#cpf-accept').innerHTML = student.cpf;
          newDivAccept.querySelector('#telefone-accept').innerHTML = student.telefone;

          // Adiciona a nova caixa ao <tbody> com o id "body-accept"
          bodyAccept.appendChild(newDivAccept);
        });

        const nameTd = newDiv.querySelector('#name');
        nameTd.innerHTML = student.nome;
        const emailTd = newDiv.querySelector('#email');
        emailTd.innerHTML = student.email;
        const matriculaTd = newDiv.querySelector('#matricula');
        matriculaTd.innerHTML = student.matricula;
        const campusTd = newDiv.querySelector('#campus');
        campusTd.innerHTML = student.campus;
        const cpfTd = newDiv.querySelector('#cpf');
        cpfTd.innerHTML = student.cpf;
        const telefoneTd = newDiv.querySelector('#telefone');
        telefoneTd.innerHTML = student.telefone;
        body.appendChild(newDiv);
    }
    });
  });
