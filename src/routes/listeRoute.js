const router = require('express').Router();
const multer = require('multer');

const { checkAdmin } = require('../middlewares/checkAdmin');

const upload = multer({ dest: 'public/img/' });
const {
  renderList, deleteAnimal, addAnimal, postAddAnimal,
} = require('../controllers/listController');

router.get('/list', renderList);

router.delete('/list/:id', checkAdmin, deleteAnimal);

router.route('/add')
  .get(checkAdmin, addAnimal)
  .post(upload.array('photo', 10), postAddAnimal);

module.exports = router;
