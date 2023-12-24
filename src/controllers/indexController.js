const indexController = [];

indexController.index = (req, res) => {
    res.render('index')
};


indexController.about = (req, res) => {
    res.render('about')
};

module.exports = indexController;