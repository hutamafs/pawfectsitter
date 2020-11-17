const router = require('express').Router();
const KeeperController = require('../controllers/keeper.controller');
const upload = require('../helpers/aws');

router.get('/', KeeperController.getAllKeepers)
router.get('/:id', KeeperController.getOneKeeper)
router.post('/', upload.single('image'), KeeperController.createKeeper);

module.exports = router