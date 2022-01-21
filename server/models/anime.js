const mongoose = require("mongoose");
const { Schema } = mongoose;

const animeSchema = new Schema(
    {
      Anime_ID: String,
      Name: String,
      Genre: String,
      Type: String,
      Episodes: String,
      Rating: String,
      Members: String,
    },
    { timestamps: false }
);


module.exports = mongoose.model("animes", animeSchema);