const database = require('../models');

class TurmaController {
	static async pegaTodasAsTurmas(_, res) {
		try {
			const todasAsTurmas = await database.Turmas.findAll();
			return res.status(200).json(todasAsTurmas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaTurma(req, res) {
		const { id } = req.params;
		try {
			const umaTurma = database.Turmas.findOne({ where: { id: +id } });
			return res.status(200).send(umaTurma);
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

module.exports = TurmaController;
