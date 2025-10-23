import { readAllUsers, login } from "../models/users.js";
import bcrypt from "bcrypt";

//* LOGIN
export async function loginController(req, res) {
    const users = await readAllUsers();
    const user = users.find((u) => u.email == req.body.email);
    if (!user) {
        return res.status(400).json({ message: "Email or password incorect" });
    }

    const pwdVerificator = await bcrypt.compare(req.body.pwd, user.hashPwd);

    console.log(pwdVerificator);
    if (!pwdVerificator) {
        return res.status(400).json({ message: "Email or password incorect" });
    }

    const userinfo = await login(user._id);

    return res.status(200).json({
        message: "Welcome user : " + userinfo.username,
    });
}
