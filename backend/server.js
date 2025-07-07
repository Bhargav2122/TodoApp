
require('dotenv').config()
const express = require('express')
const app  = express();
const cors = require('cors');
const userRoute = require('./routes/userRoute')
const todoRoutes = require('./routes/todoRoute')
const { default: mongoose } = require('mongoose');
const port = process.env.PORT || 1621


app.use(express.json())
app.use(cors(({
    origin:'todo-7hv2w87it-bala-bhargavs-projects.vercel.app',
    credentials:true
}))

app.use('/api/auth', userRoute)
app.use('/api/todos', todoRoutes)

mongoose.connect(process.env.MONGO_URI)
.then( () => {
    console.log('connected')
}).catch(err => console.log(err))


app.listen(port, () => {
    console.log(`server listening on port ${port}`);  
})
