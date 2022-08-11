'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Niveis',
			[
				{
					status: 'confirmado',
					estudante_id: 1,
					turma_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: 'confirmado',
					estudante_id: 1,
					turma_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: 'cancelado',
					estudante_id: 3,
					turma_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Niveis', null, {});
	},
};
