const express = require('express');

const router = express.Router();

const checkAuth = require('../../authorization/check-auth');

const { getAllOrders, getUserOrders, createOrder, deleteOrderById } = require('./order.controller');

router.get('/', checkAuth, getUserOrders);

router.get('/all', checkAuth, getAllOrders);

router.post('/', checkAuth, createOrder);

router.delete('/:id', checkAuth, deleteOrderById);

module.exports = router;
