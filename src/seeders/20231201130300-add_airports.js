'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[{
    name:'Buxar Airport',
    cityId:4,
    address:'Buxar',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name:'Bhopal Airport',
    cityId:1,
    address:'Piplani ',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
  {
    name:'Asansol Airport',
    cityId:2,
    address:'Asansol',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'Bardhaman Airport',
    cityId:3,
    address:'Dhanbad',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'Haripur Airport',
    cityId:5,
    address:'WB',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'SonpurBazari Airport',
    cityId:6,
    address:'WB',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Airports', null, {});
  }
};
