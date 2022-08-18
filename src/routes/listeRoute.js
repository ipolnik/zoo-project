const router = require('express').Router();
const multer = require('multer');

const upload = multer({ dest: 'public/img/' });
const {
  renderList, deleteAnimal, addAnimal, postAddAnimal,
} = require('../controllers/listController');

router.get('/list', renderList);

router.delete('/list/:id', deleteAnimal);

router.route('/add')
  .get(addAnimal)
  .post(upload.array('photo', 10), postAddAnimal);

module.exports = router;
