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

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user }, 
      { text: req.body.text },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: 'Todo not found or unauthorized' });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});


router.patch('/:id/toggle', async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user })
    if (!todo) return res.status(404).json({ error: 'Todo not found' })

    todo.completed = !todo.completed
    await todo.save()

    res.json(todo)
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle completion' })
  }
})

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json( { msg: 'Deleted'})
})

module.exports = router