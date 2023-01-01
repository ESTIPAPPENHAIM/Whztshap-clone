const mongoose = require("mongoose");
const mongoConfig = {
    base_uri: process.env.MONGO_ATLAS_URI,
    password: process.env.MONGO_ATLAS_PASSWORD,

};

const uri = mongoConfig.base_uri
  .replace("<password>", mongoConfig.password);

  const initialMongoConnection = () =>{
    mongoose.set("strictQuery", false);
    mongoose
     .connect(uri)
     .then(() =>
     console.log("Mongo Db database connection established successfully")
     )
     .catch((error) => console.log(error));
  };

  module.exports = initialMongoConnection;

  mongoose.connect
  