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
