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
    await queryInterface.bulkInsert('Airplanes', [
      {
       modelNumber: 'Boeing-737',
       capacity: 300,
       createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      modelNumber: 'AirBus-A320',
      capacity: 300,
      createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing-777',
      capacity: 300,
      createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      modelNumber: 'AirBus-A380',
      capacity: 300,
      createdAt: new Date(),
        updatedAt: new Date()
    },{
      modelNumber: 'A-100',
      capacity: 300,
      createdAt: new Date(),
        updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
