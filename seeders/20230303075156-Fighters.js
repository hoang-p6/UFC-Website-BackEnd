'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'fighters',
      [
        {
          firstName: 'Jon',
          lastName: 'Jones',
          wins: 27,
          losses: 1,
          draws: 0,
          birthDate: '1987-07-19',
          country: 'United States of America',
          division: 'Heavyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ciryl',
          lastName: 'Gane',
          wins: 11,
          losses: 2,
          draws: 0,
          birthDate: '1990-04-12',
          country: 'France',
          division: 'Heavyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Valentina',
          lastName: 'Shevchenko',
          wins: 23,
          losses: 4,
          draws: 0,
          birthDate: '1988-03-07',
          country: 'Krygzstan',
          division: 'Womens Flyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Alexa',
          lastName: 'Grasso',
          wins: 16,
          losses: 3,
          draws: 0,
          birthDate: '1993-08-09',
          country: 'Mexico',
          division: 'Womens Flyweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Geoff',
          lastName: 'Neal',
          wins: 15,
          losses: 5,
          draws: 0,
          birthDate: '1990-08-28',
          country: 'United States of America',
          division: 'Welterweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Shavkat',
          lastName: 'Rakhmonov',
          wins: 17,
          losses: 0,
          draws: 0,
          birthDate: '1994-10-23',
          country: 'Kazakhstan',
          division: 'Welterweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Mateusz',
          lastName: 'Gamrot',
          wins: 22,
          losses: 2,
          draws: 0,
          birthDate: '1990-12-11',
          country: 'Poland',
          division: 'Lightweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jalin',
          lastName: 'Turner',
          wins: 13,
          losses: 6,
          draws: 0,
          birthDate: '1995-05-18',
          country: 'United States of America',
          division: 'Lightweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bo',
          lastName: 'Nickal',
          wins: 4,
          losses: 0,
          draws: 0,
          birthDate: '1996-01-14',
          country: 'United States of America',
          division: 'Middleweight',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jamie',
          lastName: 'Pickett',
          wins: 13,
          losses: 9,
          draws: 0,
          birthDate: '1988-08-29',
          country: 'United States of America',
          division: 'Middleweight',
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
