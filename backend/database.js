const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://mishraAvneesh:003Ishuashu@cluster0.dc03zpp.mongodb.net/firstfoodmern?retryWrites=true&w=majority";
const mongoDB = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected successfully");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else {
          global.food_items =data;
          console.log(global.food_items)
        }
    })
  });
};

module.exports = mongoDB;
