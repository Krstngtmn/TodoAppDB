
const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')


router.get('/', tasksController.getTasks);
router.post('/remove', tasksController.deleteTask);
router.post('/', tasksController.createTask);


module.exports = router;
