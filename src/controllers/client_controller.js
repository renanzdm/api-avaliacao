const { response } = require('express');
const database = require('../database/connection')

class ClientController {
    newClient(req, res) {
        const { primary_name, surname, phone, address } = req.body

        database.insert({ primary_name, surname, phone, address }).table('clients').then(data => {
            console.log(data);
            res.send('Cliente Criado')
        }).catch(error => {
            res.json({ "error": error })
        })

    }


    getAllClients(req, res) {
        database.select("*").table("clients").then(clients => {
            console.log(clients)
            res.json(clients)

        }).catch(error => {
            res.json({ "error": error })
        })
    }


    getClientById(req, res) {
        const id = req.params.id
        database.where({ id: id }).select("*").table("clients").then(clients => {
            console.log(id);

            res.json(clients)
        }).catch(error => {
            res.json({ "error": error })
        })
    }

    updateClient(req, res) {
        const id = req.params.id
        const { primary_name, surname, phone, address } = req.body

        database.where({ id: id }).update({
            primary_name: primary_name, surname: surname, phone: phone,
            address: address
        }).table("clients").then(clients => {
            res.send('Cliente Atualizado com sucesso')
        }).catch(error => {
            res.json({ "error": error })
        })

    }

    deleteClient(req, res) {
        const id = req.params.id

        database.where({ id: id }).del().table("clients").then(data => {
            res.send('Excluido')

        }).then(error => {
            res.send(error)

        }

        )


    }





}
module.exports = new ClientController()