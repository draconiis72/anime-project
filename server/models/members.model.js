const mongoose = require('mongoose');

const MemberProfilesSchema = new mongoose.Schema ({
    // insert object parameters inside here to create models
    image: {type: String },
    password:{type: String},
    username: { type:String, required:[true, "Nickname Required"], minlength:3 },
    favoriteAnime: { type:String},
    memberSince: { type: Date},
    somethingAboutYou: { type:String, maxlength: 200},
    animesLiked: { type:String, maxlength: 200},
    admin:{type:Boolean, default:false},


}, { timestamps:true });


module.exports = mongoose.model("Members", MemberProfilesSchema);