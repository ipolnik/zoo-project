const router = require('express').Router();
const {renderLogin, loginAdmin} = require('../controllers/loginController')

router.get('/', renderLogin)
router.post('/', loginAdmin)

module.exports = router;