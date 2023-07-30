const mongoose = require('mongoose')

const ManhwaSchema = new mongoose.Schema({
    obra: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true,
    },
    opiniao: {
        type:String,
        required: true,
    },
    sinopse: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('artefatos', ManhwaSchema)