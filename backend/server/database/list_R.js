const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const ListRSchema = new mongoose.Schema({});

const ListR = mongoose.model("ListR", ListRSchema);

module.exports = ListR;
