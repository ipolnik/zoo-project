const { renderTariffs, updateTariffs, addTariff, deleteTariff } = require('../controllers/renderTariffs');

const router = require('express').Router();


router
  .get('/', renderTariffs)
  .put('/', updateTariffs)
  .post('/', addTariff)
  .delete('/', deleteTariff)


module.exports = router;