const express = require('express')
const Tarefa = require('../models/tarefaModel')

const{getTarefas, getTarefa, createTarefa, updateTarefa, deleteTarefa} = require("../controllers/tarefaController")

//retorna um roteador
const router = express.Router()

router.get('/', getTarefas)
router.get('/:id', getTarefa)
router.post('/', createTarefa)
router.put('/:id',updateTarefa)
router.delete('/:id', deleteTarefa)

module.exports = router