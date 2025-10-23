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
    await user.save();
}

//* READ
export async function readAllUsers() {
    return User.find();
}

//* DELETE
export async function deleteUser(userId) {
    await User.findByIdAndDelete(userId);
}

//* LOGIN
export async function login(id) {
    const user = await User.findById(id);
    const userInfo = {
        username: user.username,
        email: user.email,
    };
    return userInfo;
}
