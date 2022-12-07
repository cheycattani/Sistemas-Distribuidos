
function getAlunos(){
  
  fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  const alunos = await response.json();

  return alunos
}

function getAlunosbyId(){
  fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/?id=23')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
}

alunos = getAlunos()
console.log(alunos);
