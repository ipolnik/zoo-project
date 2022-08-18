const renderTemplate = require('../lib/renderTemplate');
const AnimalCard = require('../views/AnimalCard');
const EditAnimalCard = require('../views/EditAnimalCard');

const { Animal, Picture } = require('../../db/models');

class AnimalCardController {
  async addPic(req, res) {
    const { id } = req.params;
    const fileName = req.file.filename;
    try {
      const newPic = await Picture.create({ animal_id: id, picture_link: `/img/${fileName}` });
      res.json({ status: 'created', id: newPic.id, link: newPic.picture_link });
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async getCard(req, res) {
    try {
      const newUser = req.session?.admin;
      // const newUser = 'Admin';
      const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      const pictures = animal.Pictures;
      const firstPic = pictures.shift();
      renderTemplate(AnimalCard, {
        animal, pictures, firstPic, newUser,
      }, res);
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async deleteCard(req, res) {
    try {
      const newUser = req.session?.admin;
      // const newUser = 'Admin';
      if (newUser) {
        await Animal.destroy({ where: { id: req.params.id } });
        res.json({ isDeleteSuccessful: true });
      } else {
        res.redirect('/animalcard/1');
      }
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async getUpdateCard(req, res) {
    try {
      const newUser = req.session?.admin;
      // const newUser = 'Admin';
      const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      const pictures = animal.Pictures;
      renderTemplate(EditAnimalCard, {
        animal, pictures, newUser,
      }, res);
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async updateCard(req, res) {
    try {
      const { name, breed, description } = req.body;
      const newUser = req.session?.admin;
      // const newUser = 'Admin';
      // const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      await Animal.update({
        name: name,
        breed: breed,
        description: description,
      }, { where: { id: req.params.id } });
      res.json('updated');
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async deletePic(req, res) {
    try {
      const newUser = req.session?.admin;
      // const newUser = 'Admin';
      if (newUser) {
        await Picture.destroy({ where: { id: req.params.id } });
        res.json({ isDeleteSuccessful: true });
      } else {
        res.redirect('/animalcard/1');
      }
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }
}

module.exports = new AnimalCardController();
