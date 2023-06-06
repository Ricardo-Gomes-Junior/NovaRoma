const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const AgendasController = require("../app/controllers/api/AgendasController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

router.get('/agendas', AgendasController.list)
router.get('/agendas/:id', AgendasController.show)
router.post('/agendas', AgendasController.save)
router.delete('/agendas/:id', AgendasController.remove)
router.put('/agendas/:id', AgendasController.update)
router.put('/agendas/:id/update-status', AgendasController.updateStatus)


module.exports = router;