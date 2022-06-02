const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const Patients = new mongoose.Schema({});
const Patient = mongoose.model("ListR", Patients);

module.exports = Patient;
