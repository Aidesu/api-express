import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    hashPwd: String,
});

const User = mongoose.model("User", userSchema);
export default User;

//* CREATE
export async function createUser(user) {
    try {
        await user.save();
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* READ
export async function readAllUsers() {
    try {
        return User.find();
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* DELETE
export async function deleteUser(userId) {
    try {
        await User.findByIdAndDelete(userId);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* LOGIN
export async function login(id) {
    try {
        const user = await User.findById(id);
        const userInfo = {
            username: user.username,
            email: user.email,
        };
        return userInfo;
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
