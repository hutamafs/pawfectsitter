const router = require('express').Router();
const KeeperRoute = require('./keeper.route')

router.get('/', (req, res) => {
    res.send('home page')
})
router.use('/keepers', KeeperRoute)

module.exports = router;