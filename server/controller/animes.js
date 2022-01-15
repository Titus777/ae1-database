const anime = require("../models/anime")

exports.list = async (req, res) => {
    try {
      const animes = await anime.find({});
      res.render("animes", { animes: animes });
    } catch (e) {
      res.status(404).send({ message: "could not list animes" });
    }
  };

exports.delete = (req,res) =>{
    const id = req.params.id;
    try {
        await anime.findByIdAndRemove(id);
        res.redirect("/animes/?message=anime has been deleted");
    } catch (e) {
        res.status(404).send({
            message: `could not delete record ${id}.`,
        });
    }
};

exports.update = (req,res) =>{
    const id = req.params.id;
    try {
        const anime = await anime.updateOne({ _id: id }, req.body);
        res.redirect('/animes/?message=anime has been updated');
    } catch (e) {
        res.status(404).send({
            message: `couldn't find anime ${id}.`,
        });
    }
};

exports.edit = (req,res) =>{
    const id = req.params.id;
    try {
        const anime = await anime.findById(id);
        res.render('update-anime', { anime: anime, id: id });
    } catch (e) {
        res.status(404).send({
            message: `couldn't find anime ${id}.`,
        });
    }
};

exports.create = async (req, res) => {

    try {
      const anime = new anime({ ID: req.body.ID, Name: req.body.Name, Genre: req.body.Genre, Type: req.body.Type, 
        Episodes: req.body.Episodes, Rating: req.body.Rating, Members: req.body.Members});
      await anime.save();
      res.redirect('/animes/?message=anime has been created')
    } catch (e) {
      if (e.errors) {
        console.log(e.errors);
        res.render('add-anime', { errors: e.errors })
        return;
      }
      return res.status(400).send({
        message: JSON.parse(e),
      });
    }
  }