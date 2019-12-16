const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  avatar_url: { type: String },
  gender: {
    //性别是可枚举类型
    type: String,
    enum: ["male", "female"],
    default: "male",
    required: true
  },
  headline: { type: String, default: "headline" },
  locations: {
    type: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
    select: false
  },
  business: { type: Schema.Types.ObjectId, ref: "Topic", select: false },
  employments: {
    type: [
      {
        company: { type: Schema.Types.ObjectId, ref: "Topic" },
        job: { type: Schema.Types.ObjectId, ref: "Topic" }
      }
    ],
    select: false
  },
  educations: {
    type: [
      {
        school: { type: Schema.Types.ObjectId, ref: "Topic" },
        major: { type: Schema.Types.ObjectId, ref: "Topic" },
        dipmola: { type: Number, enum: [1, 2, 3, 4, 5] },
        entrace_year: { type: String },
        graduation_year: { type: String }
      }
    ],
    select: false
  },
  following: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    select: false
  },
  followingTopics: {
    type: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
    select: false
  },
  likingAnswers: {
    type: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    select: false
  },
  dislikingAnswers: {
    type: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    select: false
  },
  collectingAnswers: {
    type: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    select: false
  }
});

module.exports = model("User", userSchema);
