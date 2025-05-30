const mongoose = require('mongoose');

const AnimeMoviesSchema = new mongoose.Schema ({
    // insert object parameters inside here to create models
    image: {type: String },
    title: { type:String, required:[true, "Title Required"], minlength:3 },
    genre: { type:String, required:[true, "Genre required"], minlength:3 },
    director: { type:String, required:[true, "Director required"], minlength:[3, "Must be 3 characters long"] },
    releaseDate: { type:Date, required:[true]},
    characters: { type:String, required:[true]},
    length: {type: Number, require:true },
    numberOfLikes: {type:Number, default:0 },
    description: {type:String},
    submittedBy: {type:String},


}, { timestamps:true });


module.exports = mongoose.model("AnimeMovies", AnimeMoviesSchema);


