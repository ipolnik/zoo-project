const { renderTariffs, updateTariffs, addTariff, deleteTariff, renderPurchase, sendTicket } = require('../controllers/renderTariffs');
const {checkAdmin} = require('../middlewares/checkAdmin')
const router = require('express').Router();


router
  .get('/', renderTariffs)
  .put('/', checkAdmin, updateTariffs)
  .post('/', checkAdmin, addTariff)
  .delete('/', checkAdmin, deleteTariff)

router.get('/buy/:id', renderPurchase)
router.post('/buy', sendTicket)


module.exports = router;