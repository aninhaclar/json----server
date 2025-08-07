'use strict'

async function getShows() {
    const url = 'http://localhost:3000/shows'
    const response = await fetch(url)
    const shows = await response.json()
    console.log(shows)
}

async function createShow(newShow) {
    const url = 'http://localhost:3000/shows'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShow)
    }
    const response = await fetch(url, options)

    if (response.ok) {
        console.log("Show criado com sucesso!")
    } else {
        console.log("Falha no registro do Show!")
    }
}

async function updateShow(showId, updatedShow) {
    const url = `http://localhost:3000/shows/${showId}`  // corrigido
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedShow)
    }

    const response = await fetch(url, options)

    if (response.ok) {
        console.log("Show alterado com sucesso!")
    } else {
        console.log("Falha na alteração!")
    }
}

async function deleteShow(showId) {
    const url = `http://localhost:3000/shows/${showId}`  // corrigido
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)  // corrigido

    if (response.ok) {
        console.log("Show excluído com sucesso!")
    } else {
        console.log("Não foi possível excluir.")
    }
}

// Exemplo de uso:
const show123 = {
    "titulo": "Festa do Peão de Americana",
    "descricao": "Rodeio maravilhoso, venha conhecer",
    "imagem": "https://via.placeholder.com/300x200?text=Rock+Brasil"
}

// createShow(show123)
// updateShow(1, show123)
// deleteShow(1)
// getShows()
