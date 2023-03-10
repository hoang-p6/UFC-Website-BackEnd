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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/JONES_JON_BELT_03_04.png?itok=6m9Ow949',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/GANE_CIRYL_03-05.png?itok=kq0vVlPf',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/SHEVCHENKO_VALENTINA_03_4.png?itok=_cFyGErY',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/GRASSO_ALEXA_BELTMOCK.png?itok=lSdyJgag',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/NEAL_GEOFF_03-05.png?itok=Ot0dQyQa',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/RAKHMONOV_SHAVKHAT_03-05.png?itok=r_banJ3c',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/GAMROT_MATEUSZ_03-05.png?itok=JtdjsO1B',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/TURNER_JALIN_03-05.png?itok=ra435Qhz',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/NICKAL_BO_03-05.png?itok=GoFjTUjv',
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
          image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/PICKETT_JAMIE_03-05.png?itok=KZ5wGIHD',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          firstName: 'Petr',
          lastName: 'Yan',
          wins: 16,
          losses: 4,
          draws: 0,
          birthDate: '1993-02-11',
          country: 'Russia',
          division: 'Bantamweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4293517.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Merab',
          lastName: 'Dvalishvili',
          wins: 15,
          losses: 4,
          draws: 0,
          birthDate: '1991-01-10',
          country: 'Georgia',
          division: 'Bantamweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3948572.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Alexander',
          lastName: 'Volkov',
          wins: 35,
          losses: 10,
          draws: 0,
          birthDate: '1988-10-24',
          country: 'Russia',
          division: 'Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2993650.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Alexander',
          lastName: 'Romanov',
          wins: 16,
          losses: 1,
          draws: 0,
          birthDate: '1990-12-11',
          country: 'Moldova',
          division: 'Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4421473.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Nikita',
          lastName: 'Krylov',
          wins: 29,
          losses: 9,
          draws: 0,
          birthDate: '1992-3-7',
          country: 'Ukraine',
          division: 'Light Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3026263.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ryan',
          lastName: 'Spann',
          wins: 21,
          losses: 7,
          draws: 0,
          birthDate: '1991-08-24',
          country: 'United States of America',
          division: 'Light Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3887606.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ricardo',
          lastName: 'Ramos',
          wins: 16,
          losses: 4,
          draws: 0,
          birthDate: '1995-08-01',
          country: 'Brazil',
          division: 'Featherweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3571515.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Austin',
          lastName: 'Lago',
          wins: 9,
          losses: 1,
          draws: 0,
          birthDate: '1994-07-10',
          country: 'United States of America',
          division: 'Featherweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4570669.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Said',
          lastName: 'Nurmagomedov',
          wins: 17,
          losses: 2,
          draws: 0,
          birthDate: '1992-04-05',
          country: 'Russia',
          division: 'Bantamweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3903378.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jonathan',
          lastName: 'Martinez',
          wins: 17,
          losses: 4,
          draws: 0,
          birthDate: '1994-04-20',
          country: 'United States of America',
          division: 'Bantamweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3928690.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Vitor',
          lastName: 'Petrino',
          wins: 7,
          losses: 0,
          draws: 0,
          birthDate: '1997-08-28',
          country: 'Brazil',
          division: 'Light Heavyweight',
          image: 'https://tse1.mm.bing.net/th?id=OIP.swaYMWAS8cfbyMKLEiQJ2QD6D6&pid=Api&P=0',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Anton',
          lastName: 'Turkalj',
          wins: 8,
          losses: 1,
          draws: 0,
          birthDate: '1996-06-10',
          country: 'Sweden',
          division: 'Light Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4875513.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Leon',
          lastName: 'Edwards',
          wins: 20,
          losses: 3,
          draws: 0,
          birthDate: '1991-08-25',
          country: 'United Kingdom',
          division: 'WelterWeight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3152929.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Kamaru',
          lastName: 'Usman',
          wins: 20,
          losses: 2,
          draws: 0,
          birthDate: '1987-05-11',
          country: 'Nigeria',
          division: 'Welterweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3088812.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Justin',
          lastName: 'Gaethje',
          wins: 23,
          losses: 4,
          draws: 0,
          birthDate: '1988-11-14',
          country: 'United States of America',
          division: 'Lightweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3022345.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Rafael',
          lastName: 'Fiziev',
          wins: 12,
          losses: 1,
          draws: 0,
          birthDate: '1993-03-05',
          country: 'Azerbaijan',
          division: 'Lightweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4339488.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Joanne',
          lastName: 'Wood',
          wins: 15,
          losses: 8,
          draws: 0,
          birthDate: '1985-12-23',
          country: 'Scotland',
          division: 'Womens Flyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3028064.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Luana',
          lastName: 'Carolina',
          wins: 8,
          losses: 3,
          draws: 0,
          birthDate: '1993-06-11',
          country: 'Brazil',
          division: 'Womens Flyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4372194.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Gunnar',
          lastName: 'Nelson',
          wins: 18,
          losses: 5,
          draws: 1,
          birthDate: '1988-07-28',
          country: 'Iceland',
          division: 'Welterweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2968990.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bryan',
          lastName: 'Barberena',
          wins: 18,
          losses: 9,
          draws: 0,
          birthDate: '1989-05-03',
          country: 'United States of America',
          division: 'Welterweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3111927.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Marvin',
          lastName: 'Vettori',
          wins: 18,
          losses: 6,
          draws: 1,
          birthDate: '1993-09-20',
          country: 'Italy',
          division: 'Middleweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4001851.png&w=350&h=254',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Roman',
          lastName: 'Dolidze',
          wins: 12,
          losses: 1,
          draws: 0,
          birthDate: '1988-07-15',
          country: 'Georgia',
          division: 'Light Heavyweight',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4411508.png&w=350&h=254',
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
