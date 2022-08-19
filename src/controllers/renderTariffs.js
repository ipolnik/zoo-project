const renderTemplate = require('../lib/renderTemplate');
const Tariffs = require('../views/Tariffs');
const BuyTickets = require('../views/BuyTickets')
const { Price } = require('../../db/models')
const nodemailer = require('nodemailer');


const renderTariffs = async (req, res) => {
  const prices = await Price.findAll({ order: [['id']] });
  // console.log('========================', prices)
  const admin = req.session?.admin;
  renderTemplate(Tariffs, { prices, admin }, res);
};

const updateTariffs = async (req, res) => {
  // const {tarid, adultprice, kidsprice, elders} = req.body;
  const { formData } = req.body;
  // console.log(formData.adult, formData.id)
  if (formData.adult) {
    await Price.update({ option1: formData.adult }, { where: { id: formData.id } });
  }
  if (formData.kid) {
    await Price.update({ option2: formData.kid }, { where: { id: formData.id } });
  }
  if (formData.elder) {
    await Price.update({ option3: formData.elder }, { where: { id: formData.id } });
  }
  res.sendStatus(200);
};

const addTariff = async (req, res) => {
  try {
    const { formData } = req.body;
    await Price.create({
      price_name: formData.price_name, option1: formData.option1, option2: formData.option2, option3: formData.option3,
    });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

const deleteTariff = async (req, res) => {
  try {
    const { deleteid } = req.body;
    console.log('DELETEID', deleteid.id);
    await Price.destroy({ where: { id: deleteid.id } });
    res.sendStatus(200);
  } catch {
    res.status(500);
  }
};

/// Purchase page

const renderPurchase = async (req, res) => {
  const {id} = req.params;
  console.log("id========================>", id)
  const prices = await Price.findOne({where: { id }});
  console.log(prices)

  renderTemplate(BuyTickets, {prices}, res);
};

const sendTicket = (req, res) => {
  const { email, totalsum } = req.body;
  function main() {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'reqgul889@mail.ru',
        pass: 'r6ntrfvVEacudvuMkicN',
      },
    });
    // send mail with defined transport object
    const info = transporter.sendMail({
      from: '"Урюпинский зоопарк" <reqgul889@mail.ru>', // sender address
      to: `${email}`, // list of receivers
      subject: 'Билеты в Урюпинский зоопарк', // Subject line
      text: 'Вы забронировали билеты на сумму:', // plain text body
      html: `<b>Вы забронировали билеты.</b>
      <p>К оплате: ${totalsum} руб.</p>
      <p>Не забудьте показать это письмо на кассе.</p>`, // html body
    });
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main();
  res.sendStatus(200);


};

module.exports = {
  renderTariffs, updateTariffs, addTariff, deleteTariff, renderPurchase, sendTicket,
};


