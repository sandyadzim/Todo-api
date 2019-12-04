const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 2500

const TodoController = require('./controllers/todo')

app.use(bodyParser.json())

app.group('/api', (router) => {

    router.get('/todo', TodoController.showTodo)
    router.post('/todo', TodoController.createTodo)
    router.put('/todo/:id', TodoController.updateTodo)
    router.delete('/todo/:id', TodoController.deleteTodo)
})
app.listen(port, () => console.log('Listening o Port ${2500}'))
// app.listen(process.env.PORT||4000, () => console.log(`Listening o Port ${4000}`))