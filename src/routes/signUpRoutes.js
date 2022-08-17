const router = require('express').Router();

const { renderSignUp, createAdmin } = require('../controllers/signUpController')

router.get('/', renderSignUp)
router.post('/', createAdmin)

module.exports = router; 