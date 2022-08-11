'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Pessoas',
			[
				{
					nome: 'John Doe',
					ativo: true,
					email: 'exemplo1@teste.com',
					role: 'professor',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Daniel',
					ativo: false,
					email: 'exemplo2@teste.com',
					role: 'estudante',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Fuladno',
					ativo: true,
					email: 'exemplo3@teste.com',
					role: 'estudante',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Pessoas', null, {});
	},
};
