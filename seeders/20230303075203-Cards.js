'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cards',
      [
        {
          title: 'UFC 285: Jones VS Gane',
          date: '2023-03-04',
          startTime: '10 PM EST',
          city: 'Paradise',
          country: 'United States of America',
          arena: 'T-Mobile Arena',
          image: 'https://tse1.mm.bing.net/th?id=OIF.4Fwfn16gIrhy4AtWqm06FA&pid=Api&P=0',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
