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
