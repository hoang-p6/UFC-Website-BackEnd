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
        },
        {
          cardId: 2,
          matchupId: 6,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 2,
          matchupId: 7,
          division: 'Heavyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 2,
          matchupId: 8,
          division: 'Catch Weight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 2,
          matchupId: 9,
          division: 'Featherweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 2,
          matchupId: 10,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 2,
          matchupId: 11,
          division: 'Light Heavyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 3,
          matchupId: 12,
          division: 'Welterweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 3,
          matchupId: 13,
          division: 'Lightweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 3,
          matchupId: 14,
          division: 'Womens Flyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 3,
          matchupId: 15,
          division: 'Welterweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 3,
          matchupId: 16,
          division: 'Middleweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 4,
          matchupId: 17,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 4,
          matchupId: 18,
          division: 'Womens Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 4,
          matchupId: 19,
          division: 'Featherweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 4,
          matchupId: 20,
          division: 'Womens Flyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 4,
          matchupId: 21,
          division: 'Middleweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 5,
          matchupId: 22,
          division: 'Middleweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 5,
          matchupId: 23,
          division: 'Welterweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 5,
          matchupId: 24,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 5,
          matchupId: 25,
          division: 'Welterweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 5,
          matchupId: 26,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 27,
          division: 'Featherweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 28,
          division: 'Light Heavyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 29,
          division: 'Featherweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 30,
          division: 'Light Heavyweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 31,
          division: 'Bantamweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardId: 6,
          matchupId: 32,
          division: 'Featherweight',
          winner: "TBD",
          createdAt: new Date(),
          updatedAt: new Date()
        },


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
