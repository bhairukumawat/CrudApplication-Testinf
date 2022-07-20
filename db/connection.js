require('dotenv').config();
const mongoose = require("mongoose");
const db = process.env.DATABASE || School;
const host = process.env.HOST || localhost;

database().catch((err) => console.log(err));

async function database() {
  await mongoose.connect(`mongodb://${host}:27017/${db}`);
  console.log("Successfully Connected with Database");
}

mongoose.set("debug", true);
