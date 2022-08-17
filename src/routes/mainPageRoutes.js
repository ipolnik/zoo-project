const router = require('express').Router();

const { renderHome } = require('../controllers/mainPageController')

router.get('/', renderHome);

module.exports = router;