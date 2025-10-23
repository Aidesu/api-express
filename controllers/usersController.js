import { readAllUsers, createUser, deleteUser } from "../models/users.js";
import User from "../models/users.js";

//* CREATE
export async function createUserController(req, res) {
    try {
        const users = await readAllUsers();
        const saltRounds = 10;
        const user = users.find((u) => u.email === req.body.email);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const { username, email } = req.body;
        const hashPwd = bcrypt.hashSync(req.body.pwd, saltRounds);

        const newUser = new User({ username, email, hashPwd });
        createUser(newUser);
        res.status(200).json({ newUser });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* READ
export async function readAllUsersController(req, res) {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No user found" });
        }
        res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* DELETE
export async function deleteUserController(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        deleteUser(user._id);
        return res
            .status(200)
            .json({ message: "User " + user.email + " as been deleted" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}
