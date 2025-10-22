import { readAllUsers, createUser, deleteUser } from "../models/users.js";
import bcrypt from "bcrypt";

export function readAllUsersController(req, res) {
  const users = readAllUsers();
  if (users.length === 0) {
    return res.status(404).json({ message: "No user found" });
  }
  res.status(200).json(users);
}

export function createUserController(req, res) {
  const users = readAllUsers();
  const saltRounds = 10;
  const user = users.find((u) => u.email === req.body.email);
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newEmail = req.body.email;
  const newPwd = bcrypt.hashSync(req.body.pwd, saltRounds);

  let newUser = {
    id: users.length + 1,
    email: newEmail,
    pwd: newPwd,
  };

  createUser(newUser);
  return res
    .status(200)
    .json({ message: "User " + newUser.email + " as been created" });
}

export function deleteUserController(req, res) {
  const users = readAllUsers();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  deleteUser(user.id);
  return res
    .status(200)
    .json({ message: "User " + user.email + " as been deleted" });
}
