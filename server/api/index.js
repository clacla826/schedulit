const router = require('express').Router();

router.use('/users', require('./users'))
router.use('/appointments', require('./appointments'))
router.use('/services', require('./services'))
router.use('/properties', require('./properties'))
router.use('/unavailableTimes', require('./unavailableTimes'))

router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

module.exports = router;
