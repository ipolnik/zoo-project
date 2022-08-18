module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [{
      name: 'Denis',
      breed: 'begemot',
      description: 'begemot - Denis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Andrei',
      breed: 'Sova',
      description: 'Lorem',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Florin',
      breed: 'Крокодил',
      description: 'Крокодил',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sophie',
      breed: 'Рыба',
      description: 'Рыба',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
