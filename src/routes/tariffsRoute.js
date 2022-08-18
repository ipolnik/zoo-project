const { renderTariffs, updateTariffs, addTariff, deleteTariff, renderPurchase } = require('../controllers/renderTariffs');
const {checkAdmin} = require('../middlewares/checkAdmin')
const router = require('express').Router();


router
  .get('/', renderTariffs)
  .put('/', checkAdmin, updateTariffs)
  .post('/', checkAdmin, addTariff)
  .delete('/', checkAdmin, deleteTariff)

router.get('/buy', renderPurchase)


module.exports = router;