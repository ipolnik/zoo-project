const { renderTariffs, updateTariffs, addTariff, deleteTariff, renderPurchase } = require('../controllers/renderTariffs');

const router = require('express').Router();


router
  .get('/', renderTariffs)
  .put('/', updateTariffs)
  .post('/', addTariff)
  .delete('/', deleteTariff)

router.get('/buy', renderPurchase)


module.exports = router;