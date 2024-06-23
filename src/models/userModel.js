import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("users", userSchema);
