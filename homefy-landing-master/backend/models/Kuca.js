const mongoose = require("mongoose")

const KucaSchema = new mongoose.Schema({
    naziv: {
        type: String,
        required: true,

    },
    key: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Kuca", KucaSchema)