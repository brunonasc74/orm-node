'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Niveis',
			[
				{
					data_inicio: '2020-07-01',
					nivel_id: 3,
					docente_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					data_inicio: '2021-07-01',
					nivel_id: 2,
					docente_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					data_inicio: '2022-07-01',
					nivel_id: 1,
					docente_id: 1,
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
