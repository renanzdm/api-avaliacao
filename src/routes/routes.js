const connection = require('../database/connection')
const expresss = require('express')
const router = expresss.Router()
const ClientController = require('../controllers/client_controller')

router.post('/add_client', ClientController.newClient)
router.get('/clients', ClientController.getAllClients)
router.get('/clients/:id', ClientController.getClientById)
router.put('/update/clients/:id', ClientController.updateClient)
router.delete('/delete/clients/:id', ClientController.deleteClient)

module.exports = router