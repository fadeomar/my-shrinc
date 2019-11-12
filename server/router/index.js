const express = require('express');
const {
  clientError, cities, initialResult, profile,
} = require('../controllers');

const router = express.Router();

router.get('/profile/:id', profile);
router.get('/cities', cities);
router.get('/initial', initialResult);
// router.post('/signup', signup);
// router.post('/filter', filter);

router.use(clientError);

module.exports = router;
