const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	acercaDeNosotros: (req, res) => {
		return res.render('acerca_nosotros_share');
	}
}

module.exports = controller;