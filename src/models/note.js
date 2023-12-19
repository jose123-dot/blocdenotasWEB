const {Schema, model} = require('mongoose');

 const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    }
       
}, {
    timestamps: true
});

module.exports = model('note', NoteSchema);