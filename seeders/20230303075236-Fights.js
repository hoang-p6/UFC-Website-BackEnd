'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'fights',
      [
        {
          cardId: 1,
          matchupId: 1,
          division: 'Heavyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 1,
          matchupId: 2,
          division: 'Womens Flyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 3,
          division: 'Welterweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 4,
          division: 'Lightweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 5,
          division: 'Middleweight',
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
