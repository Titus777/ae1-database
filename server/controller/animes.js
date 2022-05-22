const anime = require("../models/anime")

exports.searchBar = async(req,res) =>{
  try{

    const animeSearch = await anime.find({$text:{$search:req.body.animeName}})

    if(animeSearch.length > 0){
      res.render("home",{animes:animeSearch})
    }else{
      res.status(404).send({message: "Did not find any anime with that name"})
    }
  }catch(e){
    console.log(e)
    res.status(404).redirect('/')
  }
}

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
    res.redirect("/?message=anime has been deleted");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const Anime = await anime.updateOne({_id: id},{$set:{
      Anime_ID: req.body.animeid,
      Name: req.body.Name,
      Genre: req.body.Genre,
      Type: req.body.Type,
      Episodes: req.body.Episodes,
      Rating: req.body.Rating,
      Members: req.body.Members}
    });
    res.redirect('/?message=anime has been updated');
  } catch (e) {
    res.status(404).send({
      message: `couldn't find anime ${id}.`,
    });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.id;

  try{
      const Anime = await anime.findById(id);
      res.render('update-anime', { anime: Anime, id: id});
  } catch (e) {
      console.error(e)
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
    res.redirect("/?message=New anime has been added");
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