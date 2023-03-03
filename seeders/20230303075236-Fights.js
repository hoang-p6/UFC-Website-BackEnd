'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'fights',
      [
        {
          cardId: 1,
          fighterId: 1,
          division: 'Heavyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 1,
          fighterId: 2,
          division: 'Womens Flyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: 2,
          division: 'Welterweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: 2,
          division: 'Lightweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          fighterId: 2,
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
