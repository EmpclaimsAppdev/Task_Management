const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique: true
        },
        password : {
            type : String,
            required : true,
            unique:true
        },
        role : {
            type : Number
        }
    }
);

const User = mongoose.model('User',userSchema)

module.exports = User;
