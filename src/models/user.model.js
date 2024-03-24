import { Schema, models, model } from "mongoose";

const dataSchema = new Schema(
  {
    userEmail: String,

    userName: String,

    userPassword: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", dataSchema);
export default User;
