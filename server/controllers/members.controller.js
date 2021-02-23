const {Mongoose} = require ('mongoose');
const Members = require('../models/members.model');


module.exports = {
    FindallMemberProfiles: (req,res) => {
        Members.find()
            .sort({username:"ascending"})
            .then((foundMemberProfiles) => res.json(foundMemberProfiles))
            .catch((err) => {
                console.log("Error finding all Members: " + err);
                res.json(err)
            });
    },

    FindOneMemberProfile: (req,res)=> {
        Members.findById(req.params.id)
            .then((foundOneMemberProfile) => res.json(foundOneMemberProfile))
            .catch((err) => {
                console.log("Error finding Member Profile: " + err);
                res.json(err)
            });
    },
    CreateOneMemberProfile: (req,res) => {
        Members.findOne({
            username:req.body.username
        })
            .then((existingMemberProfile) => {
                if (existingMemberProfile) {
                    console.log("Member profile already listed")
                    res.json({message: "Member profile already in list"});
                }
                else {
                    Members.create(req.body)
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
    UpdateExistingMember: (req,res) => {
        Members.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then((updatedMemberProfile) => res.json(updatedMemberProfile))
            .catch((err) => {
                console.log("Error finding that Member profile: " + err);
                res.json(err)
            });
    },
    DeleteExistingMember: (req,res) => {
        Members.findByIdAndDelete (req.params.id)
            .then((deletedMemberProfile) => res.json (deletedMemberProfile))
            .catch((err) => {
                console.log("Error Deleting Member Profile: " + err);
                res.json(err)
            });
    },
}