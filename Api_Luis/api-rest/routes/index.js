'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.get('/user', userCtrl.getUsers)
api.get('/user/:userId', userCtrl.getUser)
api.post('/user', userCtrl.saveUser)
api.put('/user/:userId', userCtrl.updateUser)
api.delete('/user/:userId', userCtrl.deleteUser)

module.exports = api