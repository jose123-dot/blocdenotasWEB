const indexController = [];

indexController.index = (req, res) => {
    res.render('index')
};

indexController.notas = (req, res) => {
    res.render('notas')
};
indexController.about = (req, res) => {
    res.render('about')
};

module.exports = indexController;