const express = require('express');
const {
  clientError, cities, initialResult, profile, signup, filter,
} = require('../controllers');

const router = express.Router();

router.get('/profile/:id', profile);
router.get('/cities', cities);
router.get('/initial', initialResult);
router.post('/sign-up', signup);
router.post('/filter', filter);

router.use(clientError);

module.exports = router;
