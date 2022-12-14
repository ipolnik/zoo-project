const renderTemplate = require('../lib/renderTemplate');
const AnimalCard = require('../views/AnimalCard');
const EditAnimalCard = require('../views/EditAnimalCard');

const { Animal, Picture } = require('../../db/models');

class AnimalCardController {
  async addPic(req, res) {
    const { id } = req.params;
    const fileName = req.file?.filename;
    try {
      if (fileName) {
        const newPic = await Picture.create({ animal_id: id, picture_link: `/img/${fileName}` });
        res.json({ status: 'created', id: newPic.id, link: newPic.picture_link });
      }
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async getCard(req, res) {
    try {
      const admin = req.session?.admin;
      // const newUser = 'Admin';
      const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      const galeryPic = await Picture.findAll({ where: { animal_id: req.params.id } });
      const pictures = animal.Pictures;
      pictures.splice(5);
      const firstPic = pictures.shift();
      renderTemplate(AnimalCard, {
        animal, pictures, firstPic, admin, galeryPic
      }, res);
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async deleteCard(req, res) {
    try {
      const admin = req.session?.admin;
      // const newUser = 'Admin';
      if (admin) {
        await Picture.destroy({ where: { animal_id: req.params.id } });
        await Animal.destroy({ where: { id: req.params.id } });
        res.json({ isDeleteSuccessful: true });
      } else {
        res.redirect('/list');
      }
    } catch (error) {
      res.send(error);
    }
  }

  async getUpdateCard(req, res) {
    try {
      const admin = req.session?.admin;
      // const newUser = 'Admin';
      const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      const pictures = animal.Pictures;
      renderTemplate(EditAnimalCard, {
        animal, pictures, admin,
      }, res);
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async updateCard(req, res) {
    try {
      const { name, breed, description } = req.body;
      const admin = req.session?.admin;
      // const newUser = 'Admin';
      // const animal = await Animal.findOne({ include: { model: Picture }, where: { id: req.params.id } });
      await Animal.update({
        name,
        breed,
        description,
      }, { where: { id: req.params.id } });
      res.json('updated');
    } catch (error) {
      res.send(`Error =========================> ${error.message}`);
    }
  }

  async deletePic(req, res) {
    try {
      const admin = req.session?.admin;
      // const newUser = 'Admin';
      if (admin) {
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
