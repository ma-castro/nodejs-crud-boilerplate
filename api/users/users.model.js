var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var usersSchema = new Schema(
  {
    firstname: {
      type: String,
      unique: false,
      required: true
    },
    lastname: {
      type: String,
      unique: false,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      unique: false,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = usersSchema;
