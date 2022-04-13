const mongoose = require("mongoose");

const todotaskSchema = new mongoose.Schema({
  taskName: { type: String }
  })


module.exports = new mongoose.model("TodoTask", todotaskSchema);