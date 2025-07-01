const auth = require('../middlewares/authmiddleware');
const express = require('express')
const router = express.Router();
const Todo = require('../models/Todos')

router.use(auth)

router.get('/', async (req, res) => {
    const todos = await Todo.find({ user: req.user})
    res.json(todos)
})


router.post('/', async (req, res) => {
    const todo = new Todo({ text: req.body.text, user: req.user})
    await todo.save()
    
    res.status(201).json(todo)
})

router.delete('/:id', async (req, res) => {
    await Todo.findByIDAndDelete(req.params.id);
    res.json( { msg: 'Deleted'})
})

module.exports = router