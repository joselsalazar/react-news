var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  topic: {
    type: String
  },
  link: {
  	type: String
  },
  saved: {
  	type: Boolean
  },
  date: {
    type: Date
  }
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
