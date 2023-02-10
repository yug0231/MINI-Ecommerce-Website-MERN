const mongoose =require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
const password = process.env.db_Password;
const connectDatabase = async() =>{
    var result = await mongoose.connect(`mongodb+srv://mini_ecommerce:${password}@mini-ecommerce-mern.yzam1rm.mongodb.net/?retryWrites=true&w=majority`)
}
module.exports = connectDatabase;