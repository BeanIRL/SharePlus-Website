const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	acercaDeNosotros: (req, res) => {
		return res.render('Acerca_nosotros_share');
	},
	contentShare: (req, res) => {
		return res.render('Content_share');
	},
	impactoShare: (req, res) => {
		return res.render('Impacto_share');
	},
	contactoShare: (req, res) => {
		return res.render('Contactanos');
	},
}

module.exports = controller;