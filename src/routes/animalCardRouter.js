const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });
const AnimalCardController = require('../controllers/animalCardController');

router.get('/:id', AnimalCardController.getCard);
router.put('/:id', AnimalCardController.updateCard);
router.delete('/:id', AnimalCardController.deleteCard);
router.get('/:id/edit', AnimalCardController.getUpdateCard);
router.post('/:id/addpic', upload.single('file'), AnimalCardController.addPic);
router.delete('/:id/pic', AnimalCardController.deletePic);

module.exports = router;
