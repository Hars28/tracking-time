const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    project:{
    type: String,
    required: true
    },
  title: { type: String, required: true },
  date:{type:String, required: true},
  duration: { type: Number, required: true, },
  desc:{ type:String},
  start:{ type:String},
  end: {type:String},
  timer:{type:Number},
  toggle:{type:Boolean}
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
