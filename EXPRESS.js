import express from 'express'

const app = express()
const PORTA = 3000

app.use(express.json())

let tarefas = [
    {id: 1, titulo: 'Lavar louça', concluida: true},
    {id: 2, titulo: 'Lavar a casa', concluida: false},
    {id: 3, titulo: 'Lavar roupa', concluida: true}
]

