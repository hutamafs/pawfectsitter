const router = require('express').Router();
const KeeperRoute = require('./keeper.route')

router.use('/keepers', KeeperRoute)
const UserRoute = require('./UserRoute');
const authentication = require('../middlewares/authentication');

router.use('/users',UserRoute)
router.use(authentication);

module.exports = router;