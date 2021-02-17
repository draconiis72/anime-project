const {Mongoose} = require ('mongoose');
const AnimeMovies = require('../models/animeMovies.model');


module.exports = {
    FindallAnimeMovies: (req,res) => {
        AnimeMovies.find()
            .sort({title:"ascending"})
            .then((foundAnimeMovies) => res.json(foundAnimeMovies))
            .catch((err) => {
                console.log("Error finding all Anime movies: " + err);
                res.json(err)
            });
    },

    FindOneAnimeMovie: (req,res)=> {
        AnimeMovies.findById(req.params.id)
            .then((foundOneAnimeMovie) => res.json(foundOneAnimeMovie))
            .catch((err) => {
                console.log("Error finding Anime movie: " + err);
                res.json(err)
            });
    },
    CreateOneAnimeMovie: (req,res) => {
        AnimeMovies.findOne({
            title:req.body.title
        })
            .then((existingAnimeMovie) => {
                if (existingAnimeMovie) {
                    console.log("Anime movie is already listed")
                    res.json({message: "Anime movie already in list"});
                }
                else {
                    AnimeMovies.create(req.body)
                        .then((newAnimeMovie) => res.json(newAnimeMovie))
                        .catch((err) => {
                            console.log("Error creating New Anime listing: " + err);
                            res.json(err)
                        });
                }
            })
            .catch((err) => {
                console.log("Error creating Anime list creation: " + err);
                res.json(err)
            });

    },
    UpdateExistingAnimeMovie: (req,res) => {
        AnimeMovies.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then((updatedAnimeMovie) => res.json(updatedAnimeMovie))
            .catch((err) => {
                console.log("Error finding that Anime title: " + err);
                res.json(err)
            });
    },
    DeleteExistingAnimeMovie: (req,res) => {
        AnimeMovies.findByIdAndDelete (req.params.id)
            .then((deletedAnimeMovie) => res.json (deletedAnimeMovie))
            .catch((err) => {
                console.log("Error Deleting Anime title: " + err);
                res.json(err)
            });
    },
}