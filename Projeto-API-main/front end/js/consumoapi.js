 'use strict'

const escolherCurso = async() =>{

    const url = `http://localhost:3030/cursos/`

    const response = await fetch(url)

    const listaCursos = await response.json()

    return listaCursos.cursos
}

const listarEstudantes = async(curso) => {

    const url = `http://localhost:3030/alunos/?courseNome=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunos

}

const getAlunosStatus = async (status) => {

    const url = `http://localhost:3030/alunos/?statusNome=${status}`

    const response = await fetch(url)

    const statusAlunos = await response.json()

    return statusAlunos
}

const getAlunoMatricula = async (matricula) => {

    const url = `http://localhost:3030/aluno/?matriculaNumber=${matricula}`

    const response = await fetch(url)

    const aluno = await response.json()

    return aluno
}

const getAlunosCurso = async (curso) => {

    const url = `http://localhost:3030/alunos/?courseName=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos
}

export{
    escolherCurso,
    listarEstudantes,
    getAlunoMatricula,
    getAlunosCurso,
    getAlunosStatus
}