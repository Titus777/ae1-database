const mongoose = require("mongoose");
const { Schema } = mongoose;

const animeSchema = new Schema(
    {
      ID: String,
      Name: String,
      Genre: String,
      Type: String,
      Episodes: String,
      Rating: String,
      Members: String,
    },
    { timestamps: true }
);


module.exports = mongoose.model("anime", animeSchema);