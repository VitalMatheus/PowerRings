'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rings', [{
      name: 'O Um Anel',
      power: 'Controlar todos os outros anéis, conceder invisibilidade e corromper seus portadores',
      carrier: 'Frodo Bolseiro',
      forgedBy: 'sauron',
      image: 'https://guarientoportal.com/wp-content/uploads/2022/01/Anel-Senhor-Dos-Aneis.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Narya',
      power: 'Inspirar coragem e resistência nos corações dos aliados',
      carrier: 'Gandalf, o Cinzento',
      forgedBy: 'elfos',
      image: 'https://cinepop.com.br/wp-content/uploads/2022/10/narya-aneis-de-poder.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Vilya',
      power: 'Proteção e cura, o mais poderoso dos Três Anéis Élficos',
      carrier: 'Elrond',
      forgedBy: 'elfos',
      image: 'https://cinepop.com.br/wp-content/uploads/2022/10/vilya-aneis-de-poder.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rings', {
      name: ['O Um Anel', 'Narya', 'Vilya']
    }, {});
  }
};