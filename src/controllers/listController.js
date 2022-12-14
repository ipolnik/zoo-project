// const path = require('path');
const renderTemplate = require('../lib/renderTemplate');
require('dotenv').config();
const { Animal, Picture } = require('../../db/models');
const List = require('../views/List');
const Form = require('../views/Form');

const renderList = async (req, res) => {
  try {
    const admin = req.session?.admin;
    const animals = await Animal.findAll({
      order: [['id', 'DESC']],
      include: {
        model: Picture,
      },
    });
    renderTemplate(List, { animals, admin }, res);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    await Picture.destroy({ where: { animal_id: id } });
    await Animal.destroy({ where: { id } });
    res.json({ delete: 'ok' });
  } catch (error) {
    res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить запись из базы данных.',
    });
  }
};

const addAnimal = async (req, res) => {
  const admin = req.session?.admin;
  renderTemplate(Form, { admin }, res);
};

const postAddAnimal = async (req, res) => {
  const { name, breed, description } = req.body;
  const files = [...req.files];
  const result = files.map((el) => el = el.path);
  const final = result.map((el) => el.slice(6));
  try {
    const newAnimal = await Animal.create({ name, breed, description });
    // const newPictures = await Picture.create({ animal_id: newAnimal.id, picture_link: });
    if (final.length > 0) {
      for (let i = 0; i < final.length; i++) {
        await Picture.create({ animal_id: newAnimal.id, picture_link: final[i] });
      }
    } else {
      const newPicture = await Picture.create({ animal_id: newAnimal.id, picture_link: final });
    }
    res.redirect('/list');
  } catch (error) {
    console.log('Запись данных не подключена', error);
    res.redirect('/list');
  }
};

module.exports = {
  renderList, deleteAnimal, addAnimal, postAddAnimal,
};
