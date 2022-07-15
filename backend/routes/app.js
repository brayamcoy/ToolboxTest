const router = require('express').Router()

const { get, getList } = require('../controllers/app')

router.get('/', (req, res) => {
  res.send('Welcome!')
})
router.get('/files/data', get)

router.get('/files/list', getList)

module.exports = router
