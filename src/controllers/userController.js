import { User } from "../models/userModel.js";

export const register = async (req, res) => {
  const { phoneNumber, pin } = req.body;

  if (!phoneNumber || !pin) {
    return res.status(400).send("Phone number and pin is required");
  }

  //we can add hashing of pin using bcrypt

  const createdUser = await User.create({
    phoneNumber,
    pin,
  });

  return res.status(200).send(createdUser);
};
