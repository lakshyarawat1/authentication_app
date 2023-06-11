import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
