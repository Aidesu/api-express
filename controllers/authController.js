import { readAllUsers, login } from "../models/users.js";

export async function loginController(req, res) {
    const users = readAllUsers();
    const user = users.find((u) => u.email == req.body.email);
    if (!user) {
        return res.status(400).json({ message: "Email or password incorect" });
    }

    const pwdVerificator = await bcrypt.compare(req.body.pwd, user.pwd);

    console.log(pwdVerificator);
    if (!pwdVerificator) {
        return res.status(400).json({ message: "Email or password incorect" });
    }

    const userinfo = login(user.id);

    return res.status(200).json({
        message: "Bienvenue en tant que utilisateur " + userinfo.email,
    });
}
