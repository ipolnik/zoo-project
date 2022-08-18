const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });
const { checkAdmin } = require('../middlewares/checkAdmin');
const AnimalCardController = require('../controllers/animalCardController');

router.get('/:id', AnimalCardController.getCard);
router.put('/:id', checkAdmin, AnimalCardController.updateCard);
router.delete('/:id', checkAdmin, AnimalCardController.deleteCard);
router.get('/:id/edit', checkAdmin, AnimalCardController.getUpdateCard);
router.post('/:id/addpic', checkAdmin, upload.single('file'), AnimalCardController.addPic);
router.delete('/:id/pic', checkAdmin, AnimalCardController.deletePic);

module.exports = router;
