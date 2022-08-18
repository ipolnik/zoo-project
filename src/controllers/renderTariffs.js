const renderTemplate = require('../lib/renderTemplate');
const Tariffs = require('../views/Tariffs');
const BuyTickets = require('../views/BuyTickets')
const { Price } = require('../../db/models')


const renderTariffs = async (req, res) => {
  const prices = await Price.findAll({order: [['id']]});
  //console.log('========================', prices)
    const admin = req.session?.admin; 
    renderTemplate(Tariffs, {prices, admin}, res);
};


const updateTariffs = async (req, res) =>{
  //const {tarid, adultprice, kidsprice, elders} = req.body;
  const {formData} = req.body;
  //console.log(formData.adult, formData.id)
  if(formData.adult){
  await Price.update({option1 : formData.adult}, {where: {id: formData.id} })
  }
  if(formData.kid){
    await Price.update({option2 : formData.kid}, {where: {id: formData.id} })
  }
  if(formData.elder){
    await Price.update({option3 : formData.elder}, {where: {id: formData.id}})
  }
  res.sendStatus(200);
}

const addTariff = async (req, res) =>{
  try{
  const {formData} = req.body;
  await Price.create({price_name: formData.price_name, option1: formData.option1, option2: formData.option2, option3: formData.option3})
  res.sendStatus(200);
  } catch{
    res.sendStatus(500);
  }
}

const deleteTariff = async (req, res) => {
  try{
    const {deleteid} = req.body;
    console.log('DELETEID', deleteid.id)
    await Price.destroy({ where :{id: deleteid.id}})
    res.sendStatus(200);
  } catch {
    res.status(500);
  }
}



/// Purchase page

const renderPurchase = async (req, res) => {
  const prices = await Price.findAll({order: [['id']]});
    renderTemplate(BuyTickets, {prices}, res);
};


  module.exports = { renderTariffs, updateTariffs, addTariff, deleteTariff, renderPurchase};

