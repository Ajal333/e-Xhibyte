const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const bookFair = require('./bookfair.model');
const exhibition = require('./exhibition.model');

let userSchema = mongoose.Schema({
    name : { type : String },
    username : { type : String },
    phone : { type : Number },
    email : { type : String },
    password : { type : String },
    isAdmin : { type : Boolean , default : false },
    registeringToken : { type : Number },
    isActive : {type : Boolean , default : false },
    passwordResetToken : { type : String },
    resetPasswordExpires : { type : Date },
    bookFair: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bookFair' }],
    exhibition : [{type : mongoose.Schema.Types.ObjectId , ref: 'exhibition'}],

});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);