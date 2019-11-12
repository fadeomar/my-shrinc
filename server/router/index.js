const express = require('express');
const { clientError, cities } = require('../controllers');

const router = express.Router();

// router.post('/signup', signup);
// router.get('/intial', intialResult);
// router.post('/filter', filter);
// router.get('/profile/:id', profile);
router.get('/cities', cities);

router.use(clientError);

module.exports = router;
