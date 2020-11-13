const router = require('express').Router()
const KeeperController = require('../controllers/keeper.controller')

router.get('/', KeeperController.getAllKeepers)

module.exports = router