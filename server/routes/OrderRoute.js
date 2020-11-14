const router = require('express').Router();
const OrderController = require('../controllers/OrderController');

router.get('/',OrderController.getAllOrders);
router.post('/:id',OrderController.createOrder);
router.put('/:id',OrderController.finishOrder);

module.exports = router;