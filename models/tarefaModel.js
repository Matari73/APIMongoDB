const mongoose = require('mongoose')

const tarefaSchema = mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        descricao:{
            type: String,
            required: true
        },
        dificuldade:{
            type: Number,
            required: true
        }
    }
)

const Tarefa = mongoose.model('Tarefa', tarefaSchema)

module.exports = Tarefa