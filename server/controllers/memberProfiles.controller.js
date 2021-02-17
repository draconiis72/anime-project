const {Mongoose} = require ('mongoose');
const MemberProfiles = require('../models/memberProfiles.model');


module.exports = {
    FindallMemberProfiles: (req,res) => {
        MemberProfiles.find()
            .sort({title:"ascending"})
            .then((foundMemberProfiles) => res.json(foundMemberProfiles))
            .catch((err) => {
                console.log("Error finding all Members: " + err);
                res.json(err)
            });
    },

    FindOneMemberProfile: (req,res)=> {
        MemberProfiles.findById(req.params.id)
            .then((foundOneMemberProfile) => res.json(foundOneMemberProfile))
            .catch((err) => {
                console.log("Error finding Member Profile: " + err);
                res.json(err)
            });
    },
    CreateOneMemberProfile: (req,res) => {
        MemberProfiles.findOne({
            title:req.body.title
        })
            .then((existingMemberProfile) => {
                if (existingMemberProfile) {
                    console.log("Member profile already listed")
                    res.json({message: "Member profile already in list"});
                }
                else {
                    MemberProfiles.create(req.body)
                        .then((newMemberProfile) => res.json(newMemberProfile))
                        .catch((err) => {
                            console.log("Error creating New Member Profile: " + err);
                            res.json(err)
                        });
                }
            })
            .catch((err) => {
                console.log("Error creating Member Profile: " + err);
                res.json(err)
            });

    },
    UpdateExistingAnimeMovie: (req,res) => {
        MemberProfiles.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then((updatedMemberProfile) => res.json(updatedMemberProfile))
            .catch((err) => {
                console.log("Error finding that Member profile: " + err);
                res.json(err)
            });
    },
    DeleteExistingAnimeMovie: (req,res) => {
        MemberProfiles.findByIdAndDelete (req.params.id)
            .then((deletedMemberProfile) => res.json (deletedMemberProfile))
            .catch((err) => {
                console.log("Error Deleting Member Profile: " + err);
                res.json(err)
            });
    },
}