const express = require('express');

const router = express.Router();

const checkAuth = require('../../authorization/check-auth');

const { getAllOrders, getOrderById, createOrder, deleteOrderById } = require('./order.controller');

router.get('/', checkAuth, getAllOrders);

router.get('/:id', checkAuth, getOrderById);

router.post('/', checkAuth, createOrder);

router.delete('/:id', checkAuth, deleteOrderById);

module.exports = router;
