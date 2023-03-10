'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'matchups',
      [
        {
          fighterOneId: 1,
          fighterTwoId: 2,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 3,
          fighterTwoId: 4,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 5,
          fighterTwoId: 6,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 7,
          fighterTwoId: 8,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 9,
          fighterTwoId: 10,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 11,
          fighterTwoId: 12,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 13,
          fighterTwoId: 14,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 15,
          fighterTwoId: 16,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 17,
          fighterTwoId: 18,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 19,
          fighterTwoId: 20,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 21,
          fighterTwoId: 22,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 23,
          fighterTwoId: 24,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 25,
          fighterTwoId: 26,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 27,
          fighterTwoId: 28,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 29,
          fighterTwoId: 30,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 31,
          fighterTwoId: 32,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 33,
          fighterTwoId: 34,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 35,
          fighterTwoId: 36,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 37,
          fighterTwoId: 38,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 39,
          fighterTwoId: 40,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 41,
          fighterTwoId: 42,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 43,
          fighterTwoId: 44,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 45,
          fighterTwoId: 46,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 47,
          fighterTwoId: 48,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 49,
          fighterTwoId: 50,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 51,
          fighterTwoId: 52,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 53,
          fighterTwoId: 54,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 55,
          fighterTwoId: 56,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 57,
          fighterTwoId: 58,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 59,
          fighterTwoId: 60,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 61,
          fighterTwoId: 62,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 63,
          fighterTwoId: 64,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 65,
          fighterTwoId: 66,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 67,
          fighterTwoId: 68,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 69,
          fighterTwoId: 70,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 71,
          fighterTwoId: 72,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 73,
          fighterTwoId: 74,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 75,
          fighterTwoId: 76,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 77,
          fighterTwoId: 78,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 79,
          fighterTwoId: 80,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fighterOneId: 81,
          fighterTwoId: 82,

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
