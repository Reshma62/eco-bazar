import { Schema, models, model } from "mongoose";

const dataSchema = new Schema(
  {
    userEmail: { type: String },

    userName: { type: String },

    userPassword: { type: String },
    userRole: { type: String, default: "user" }, //admin or user
  },
  { timestamps: true }
);

const User = models.User || model("User", dataSchema);
export default User;
