'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'fights',
      [
        {
          cardId: 1,
          fighterId: [1, 2],
          division: 'Heavyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 1,
          fighterId: [3, 4],
          division: 'Womens Flyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: [5, 6],
          division: 'Welterweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: [7, 8],
          division: 'Lightweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: [9, 10],
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
