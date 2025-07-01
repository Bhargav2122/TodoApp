const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        text: String,
        user: { 
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }
    }
);

module.exports = mongoose.model('Todo', todoSchema)