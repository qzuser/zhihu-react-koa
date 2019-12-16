const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  __v: { type: Number, select: false },
  content: { type: String, required: true },
  commentor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  },
  questionId: { type: String, required: true },
  answerId: {type: String, required: true},
  voteCount: { type: Number, required: true, default: 0 }
});

module.exports = model("Comment", commentSchema);
