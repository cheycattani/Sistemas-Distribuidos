
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

function cadastraUsuario (body) {
  const options = {
    method: 'POST',
    body: Object.keys(body)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
      .join('&')
  }

  return fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/add', options)
      .then(T => T.json())
  }

  cadastraUsuario({ name: 'Bruno', email: 'teste@unifei.edu.br' })
    .then(() => console.log('cadastrado'))
    .catch(() => console.log('falha ao cadastrar'))



alunos = getAlunos()
id = getAlunosbyId()
console.log(id);
