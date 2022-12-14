const express = require('express');

// Import da bibioteca do cors para manipular as permissoes do protocolo http
const cors = require('cors');

// Import da bibioteca do body-parser para manipular o corpo das requisicoes do protocolo http
const bodyParser = require('body-parser');

const { getAlunoCurso } = require('./modulo/alunos.js');
const { getCurso } = require('./modulo/alunos.js');
const { getAlunoMatricula } = require('./modulo/alunos.js');
const { getAlunoDisciplina } = require('./modulo/alunos.js');
const { getAlunoConclusao } = require('./modulo/alunos.js');
const { getAlunoStatus } = require('./modulo/alunos.js');
const { listaCursos } = require('./modulo/cursos.js');


const app = express();


// request - receber dados
// response - devolver dados
app.use((request, response, next) => {
    //Permite especificar quem serao os IPS que podem acessar a API (* = todos)
    response.header('Access-Control-Allow-Origin', '*');
    //Permite especificar quais serao os verbos(metodos) que a API ira reconhecer
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Estabelece que as permissoes acima serao representadas pelo cors
    app.use(cors());

    //Da continuidade ao restante da programacao
    next();
 
});



app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let courseName = request.query.courseName 
    let alunos = getAlunoCurso(courseName)

    if(alunos)
    {
        response.status(200);
        response.json(alunos)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let nomeCursos = request.query.nomeCursos 
    let cursos = getCurso(nomeCursos)

    if(cursos)
    {
        response.status(200);
        response.json(cursos)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let matriculaNumber = request.query.matriculaNumber 
    let matricula = getAlunoMatricula(matriculaNumber)

    if(matricula)
    {
        response.status(200);
        response.json(matricula)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let courseNome = request.query.courseNome 
    let disciplinas = getAlunoDisciplina(courseNome)

    if(disciplinas)
    {
        response.status(200);
        response.json(disciplinas)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let conclusaoAno = request.query.conclusaoAno
    let conclusao = getAlunoConclusao(conclusaoAno)

    if(conclusao)
    {
        response.status(200);
        response.json(conclusao)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/alunos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let statusNome = request.query.statusNome
    let status = getAlunoStatus(statusNome)

    if(status)
    {
        response.status(200);
        response.json(status)
    }else{
        response.status(404) 
    }
    next();
});

app.get('/cursos/', cors(), async function(request, response,next){
    //recebe a variavel nome por query String (indicada quando precisamos criar filtros)
    let listar = listaCursos()
    let listarJSON = {}

    if(listar)
    {
        listarJSON.cursos = listar
        response.status(200);
        response.json(listarJSON)
    }else{
        response.status(404) 
    }
    next();
});


//Para que os endpoints posssam estar funcionando, precisamos obrigatoriamente finalizar a API com essa function, que representa o start da API
app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes.')
})