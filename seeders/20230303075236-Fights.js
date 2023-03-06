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
          winner: 'Jon Jones',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 1,
          matchupId: 2,
          division: 'Womens Flyweight',
          winner: "Alexa Grasso",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 3,
          division: 'Welterweight',
          winner: "Shavkat Rakhmonov",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 4,
          division: 'Lightweight',
          winner: "Mateusz Gamrot",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          cardId: 1,
          matchupId: 5,
          division: 'Middleweight',
          winner: "Bo Nickal",
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
