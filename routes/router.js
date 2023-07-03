const router =  require('express').Router()

const serviceRouter = require('./services')

router.use('/', serviceRouter)

module.exports = router;