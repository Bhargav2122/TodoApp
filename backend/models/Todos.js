const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        text: String,
        user: { 
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        completed: {
            type:Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model('Todo', todoSchema)