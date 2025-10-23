import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    hashPwd: String,
});

const User = mongoose.model("User", userSchema);
export default User;

export async function readAllUsers() {
    return User.find();
}

export async function createUser(user) {
    await user.save();
}

export async function deleteUser(userId) {
    // const userIndex = users.findIndex((u) => u.id == userId);
    // users.splice(userIndex, 1);
    console.log(userId);
    await User.findByIdAndDelete(userId);
}

export function login(id) {
    const user = users.find((u) => u.id == id);
    const userInfo = {
        email: user.email,
    };
    return userInfo;
}
