const router = require('express').Router();
const KeeperRoute = require('./keeper.route')

const PetRoute = require('./pet.route')

router.use('/pets', PetRoute)
router.use('/keepers', KeeperRoute)

const UserRoute = require('./UserRoute');
const authentication = require('../middlewares/authentication');

router.use('/users',UserRoute)
router.use('/keepers', KeeperRoute)
router.use(authentication);

module.exports = router;