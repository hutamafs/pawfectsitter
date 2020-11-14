const router = require('express').Router();
const KeeperRoute = require('./keeper.route');
const PetRoute = require('./pet.route');
const UserRoute = require('./UserRoute');
const OrderRoute = require('./OrderRoute');
const authentication = require('../middlewares/authentication');

router.use('/users',UserRoute)
router.use('/keepers', KeeperRoute)
router.use(authentication);
router.use('/pets', PetRoute)
router.use('/orders', OrderRoute);

module.exports = router;