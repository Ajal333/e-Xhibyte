import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let paintingExhibitionSchema = new Schema({
    name : { type : String },
    organizer : { type : String },
    location : { type : String },
    startDate : { type : Date },
    endDate : { type : Date },
    isLive : { type : Boolean },
    applicant : [{type : mongoose.Schema.Types.ObjectId , ref: 'applicant'}],
});


module.exports = mongoose.model("paintingExhibition",paintingExhibitionSchema);