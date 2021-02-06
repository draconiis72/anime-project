const {Mongoose} = require ('mongoose');
const LabelGoesHere = require('../models/namehere.model');


module.exports = {
    FindallLabels: (req,res) => {
        LabelGoesHere.find()
            .sort({title:"ascending"})
            .then((foundLabels) => res.json(foundLabels))
            .catch((err) => {
                console.log("Error finding All labels: " + err);
                res.json(err)
            });
    },

    FindOneLabel: (req,res)=> {
        LabelGoesHere.findById(req.params.id)
            .then((oneFoundLabel) => res.json(oneFoundLabel))
            .catch((err) => {
                console.log("Error finding One label: " + err);
                res.json(err)
            });
    },
    CreateNewLabel: (req,res) => {
        LabelGoesHere.findOne({
            title:req.body.title
        })
            .then((existingLabel) => {
                if (existingLabel) {
                    console.log("Label already exists")
                    res.json({message: "Label already exists"});
                }
                else {
                    LabelGoesHere.create(req.body)
                        .then((newlyCreatedLabel) => res.json(newlyCreatedLabel))
                        .catch((err) => {
                            console.log("Error creating New label: " + err);
                            res.json(err)
                        });
                }
            })
            .catch((err) => {
                console.log("Error creating new label: " + err);
                res.json(err)
            });

    },
    UpdateExistingLabel: (req,res) => {
        LabelGoesHere.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then((updatedLabel) => res.json(updatedLabel))
            .catch((err) => {
                console.log("Error finding One label: " + err);
                res.json(err)
            });
    },
    DeleteExistingLabel: (req,res) => {
        LabelGoesHere.findByIdAndDelete (req.params.id)
            .then((deletedLabel) => res.json (deletedLabel))
            .catch((err) => {
                console.log("Error Deleting One label: " + err);
                res.json(err)
            });
    },
}