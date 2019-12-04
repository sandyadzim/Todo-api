const models = require('../models')
const ToDo = models.todo

exports.showTodo = (req, res) => {
    ToDo.findAll().then(result => res.send(result))
}

exports.createTodo = (req, res) => {
    const {title, category} = req.body
    ToDo.create({
        title,
        category
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true
        })
    })
}

exports.updateTodo = (req, res) => {
    const {title, category} = req.body
    ToDo.update({
        title,
        category
    },
    {
        where: {id: req.params.id}
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true
        })
    })
}

exports.deleteTodo = (req, res) => {
    ToDo.destroy({
        where: {id: req.params.id}
    }).then(result => {
        res.send({
            status: 'success',
            message: 'Delete Success'
        })
    })
}