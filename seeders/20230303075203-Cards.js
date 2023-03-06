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
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuU_KEwJqD23HXWfmnmC2OWbFbhDg1yguU6CLGtxLfCKetqvDet4z8srPjO84ar8SWNCI&usqp=CAU',
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
