let todolistModel = require('../models/todolistModel');

// Show all tasks //

function getTasks(req, res) {
    todolistModel.find()
    .then(data => {
        res.render('index', { items: data });
})
};

// Create new task //

async function createTask(req,res){
    try{
        const newTask = await todolistModel.create({taskName: req.body.newItem});
        res.redirect('/');
    } catch (err) {
        console.log(err)
    }
};

//Delete tasks

function deleteTask (req, res) {
    todolistModel.deleteMany({})
    .then(() => {
    res.redirect('/');
}) 
    .catch (err => {
    console.log(error);
    next(error);
});
};

module.exports = {getTasks, deleteTask, createTask};
