import { listarEstudantes } from "./consumoapi.js"

alert ('aaa')
alert(localStorage.getItem('curso'))

const criarlist = (lista) => {
    const a = document.createElement('a')
    const div = document.createElement('div')
    div.classList.add('cards')
    a.textContent = lista.nome
    a.classList.add('link')
    div.appendChild(a)
    return div
}

const carregarImagens = async () => {
    const container = document.getElementById('curso')
    const lista = await listarEstudantes()

    const cards = lista.map(criarlist)

    container.replaceChildren(...cards)
}

localStorage.getItem('curso')