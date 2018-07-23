const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log('hi Appointment api')
})

module.exports = router;
