const Tarefa = require("../models/tarefaModel")
const asyncHandler = require('express-async-handler')

const getTarefas = asyncHandler(async(req, res)=>{
    try {
        const tarefas = await Tarefa.find({})
        res.status(200).json(tarefas)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getTarefa = asyncHandler(async(req, res)=>{
    try {
        const {id}= req.params
        const tarefa = await Tarefa.findById(id)
        res.status(200).json(tarefa)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const createTarefa = asyncHandler(async(req, res)=>{
    try{
        const tarefa = await Tarefa.create(req.body)
        res.status(200).json(tarefa)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const updateTarefa = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params
        const tarefa = await Tarefa.findByIdAndUpdate(id, req.body)
        //Se a tarefa não for encontrada no banco
        if (!tarefa) {
            res.status(404)
            throw new Error(`Tarefa não encontrada com o ID ${id}`)
        }
        const updatedTarefa = await Tarefa.findById(id)
        res.status(200).json(tarefa)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteTarefa = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params
        const tarefa = await Tarefa.findByIdAndDelete(id)
        if (!tarefa) {
            res.status(404)
            throw new Error(`Tarefa não encontrada com o ID ${id}`)
        }
        res.status(200).json(tarefa)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = {
    getTarefas,
    getTarefa,
    createTarefa,
    updateTarefa,
    deleteTarefa
}