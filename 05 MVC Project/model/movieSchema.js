const mongoose = require('mongoose');

const movieschema = mongoose.Schema({
    title : { type: String },
    votes : { type: String, default: 0 },
    star : { type: Number, default: 0 },
    genre : {type : String},
    language : { type : String},
    duration : { type : String},
    realeaseData : { type : Date},
    about : { type : String},
    coverImg : { type : String},
    poster : { type : String}
})

const schema = mongoose.model('MVC Project Schema', movieschema);

module.exports = schema;