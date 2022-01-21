const anime = require("../models/anime")

exports.list = async (req, res) => {
  try {
    const animes = await anime.find({});
    res.render("home", { animes: animes });
  } catch (e) {
    res.status(404).send({ message: "could not list animes" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  try {
    await anime.findByIdAndRemove(id);
    res.redirect("/home/?message=anime has been deleted");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const anime = await anime.updateOne({
      Anime_ID: req.body.animeid,
      Name: req.body.Name,
      Genre: req.body.Genre,
      Type: req.body.Type,
      Episodes: req.body.Episodes,
      Rating: req.body.Rating,
      Members: req.body.Members
    });
    res.redirect('/home/?message=anime has been updated');
  } catch (e) {
    res.status(404).send({
      message: `couldn't find anime ${id}.`,
    });
  }
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    try{
        const anime = await anime.findById(id);
        res.render('update-anime', { anime: anime, id: id});
    } catch (e) {
        res.status(404).send({
            message: `could not find anime ${id}`
        });
    }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    await anime.create({
      Anime_ID: req.body.animeid,
      Name: req.body.Name,
      Genre: req.body.Genre,
      Type: req.body.Type,
      Episodes: req.body.Episodes,
      Rating: req.body.Rating,
      Members: req.body.Members
    });

    console.log("i a in the try");
    res.redirect("/home?message=New anime has been added");
    console.log("anime added")
  } catch (e) {
    if (e.errors) {
      console.log(e);
      console.log("iamhere");
      res.render('add-anime', { errors: e.errors })
      return;
    }
    console.log(e);
  }
};