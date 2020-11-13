const router = require('express').Router();
const KeeperRoute = require('./keeper.route')
const UserRoute = require('./UserRoute');
const authentication = require('../middlewares/authentication');

router.use('/users',UserRoute)
router.use('/keepers', KeeperRoute)
router.use(authentication);

module.exports = router;