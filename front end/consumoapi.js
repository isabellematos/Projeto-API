 'use strict'

const escolherCurso = async() =>{

    const url = `http://localhost:8080/cursos/`

    const response = await fetch(url)

    const listaCursos = await response.json()

    return listaCursos.cursos
}

const listarEstudantes = async(curso) => {

    const url = `http://localhost:8080/alunos/?courseNome=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunos

}

export{
    escolherCurso,
    listarEstudantes
}