'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          userId: 1,
          fightId: 1,
          rating: 5,
          userName: 'odon',
          review: 'That was dope',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          fightId: 1,
          rating: 5,
          userName: 'odon',
          review: 'That was double dope',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          fightId: 2,
          rating: 5,
          userName: 'odon',
          review: 'That was super dope',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          fightId: 2,
          rating: 5,
          userName: 'odon',
          review: 'That was mega dope',
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
