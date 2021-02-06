const mongoose = require('mongoose');

const LabelHereSchema = new mongoose.Schema ({
    // insert object parameters inside here to create models (using movie example)
    title: { type:String, required:[true, "Title Required"], minlength:3 },
    genre: { type:String, required:[true, "Genre required"], minlength:3 },
    director: { type:String, required:[true, "Director required"], minlength:[3, "Must be 3 characters long"] },
    date: { type:Date },
    cast: { type:String },
    length: {type: Number, require:true }

}, { timestamps:true });


module.exports = mongoose.model("LabelGoesHere", LabelHereSchema);


