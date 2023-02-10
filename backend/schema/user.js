const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    products:{
        cart :{
            type:Array,
            default:[]
        },
        wishlist:{
            type:Array,
            default:[]
        },
        orders:{
            type:Array,
            default:[]
        }
    }
})

module.exports = mongoose.model('User', userSchema);