module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pictures', [{
      animal_id: 1,
      picture_link: '/img/kot1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      animal_id: 1,
      picture_link: '/img/kot2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      animal_id: 1,
      picture_link: '/img/kot3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      animal_id: 1,
      picture_link: '/img/kot4.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      animal_id: 1,
      picture_link: '/img/kot5.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
  },
};
