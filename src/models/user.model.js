import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

const UserSchema = mongoose.model("user", userSchema);
export default UserSchema;
