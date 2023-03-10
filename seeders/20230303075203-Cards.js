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
        },
        {
          title: 'Fight Night: Yan vs Dvalishvili',
          date: '2023-03-11',
          startTime: '3 PM EST',
          city: 'Las Vegas',
          country: 'United States of America',
          arena: 'The Theater at Virgin Hotels',
          image: 'https://whoisfighting.com/wp-content/uploads/events/yan-dvalishvili.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'UFC 286: Usman VS Edwards 3',
          date: '2023-03-18',
          startTime: '5 PM EST',
          city: 'London',
          country: 'United Kingdom',
          arena: 'O2 Arena',
          image: 'https://i2-prod.mirror.co.uk/incoming/article27796311.ece/ALTERNATES/s1200d/2_UFC-278-Usman-v-Edwards-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fight Night: Vera VS Sandhagen',
          date: '2023-03-25',
          startTime: '4 PM EST',
          city: 'San Antonio',
          country: 'United States of America',
          arena: 'AT&T Center',
          image: 'https://tse3.explicit.bing.net/th?id=OIP.jt3ey6hgbF2m0cO50QzKlgHaE7&pid=Api&P=0',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'UFC 287: Pereira VS Adesanya 2',
          date: '2023-04-08',
          startTime: '10 PM EST',
          city: 'Miami',
          country: 'United States of America',
          arena: 'Miami-Dade Arena',
          image: 'https://tse3.mm.bing.net/th?id=OIP.8a1JhXzqvgKvFmd49RwagQHaEK&pid=Api&P=0',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fight Night: Holloway VS Allen',
          date: '2023-04-15',
          startTime: '5:30 PM EST',
          city: 'Kansas City',
          country: 'United States of America',
          arena: 'T-Mobile Center',
          image: 'https://tse2.mm.bing.net/th?id=OIP.5hCOajX4lPQx_LV-JcpYxQHaD4&pid=Api&P=0',
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
