const notecontroller = {};


notecontroller.notas = (req, res) => {
    res.render('notas')
};
notecontroller.renderFormList = (req, res)=>{
    res.send(' Render Agregar nueva Nota');
};

//crear nota
notecontroller.createNote = (req, res) => {
    res.send('Agregar Nota');
};

//actualizar nota
notecontroller.renderUpdateNote = (req, res) => {
    res.send(' Render Actualizar Nota');
};

notecontroller.UpdateNote = (req, res) => {
    res.send('Actualizar Nota');
};

//eliminar nota
notecontroller.renderDeleteNote = (req, res) => {
    res.send(' Render Eliminar Nota');
};

notecontroller.deleteNote = (req, res) => {
    res.send('Eliminar Nota');
};



module.exports = notecontroller;