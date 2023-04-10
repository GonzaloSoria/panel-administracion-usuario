const { Schema, model } = require('mongoose');

const user_schema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    phone: String,
    email: String
},{
    timestamps: true
})

module.exports = model('User', user_schema);
