
const mongoose = require('mongoose');
const tableSchema = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name: {
      type: String,
      unique: true
    }, 
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      unique: true
    },
 

   
  });

 module.exports=mongoose.model('mynewtables',tableSchema);