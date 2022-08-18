const router = require('express').Router();
const { renderMain } = require('../controllers/homeController');

router.get('/', renderMain);

module.exports = router;