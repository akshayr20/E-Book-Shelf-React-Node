// @ts-check

const express = require('express');

const router = express.Router();

const checkAuth = require('../../authorization/check-auth');

const { getUserOrders, createOrder, deleteOrderById } = require('./order.controller');

router.get('/', checkAuth, getUserOrders);

router.post('/', checkAuth, createOrder);

router.delete('/:id', checkAuth, deleteOrderById);

module.exports = router;
