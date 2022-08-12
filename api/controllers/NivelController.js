const database = require('../models');

class NivelController {
	static async pegaTodosOsNiveis(_, res) {
		try {
			const todosOsNiveis = await database.Niveis.findAll();
			return res.status(200).json(todosOsNiveis);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmNivel(req, res) {
		const { id } = req.params;
		try {
			const umNivel = await database.Niveis.findOne({ where: { id: +id } });
			return res.status(200).send(umNivel);
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

module.exports = NivelController;
