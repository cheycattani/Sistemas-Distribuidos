
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
    ECampus: "ITAJUBÁ",
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



alunos = getAlunos()
id = getAlunosbyId()
console.log(id);
