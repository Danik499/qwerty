import { Schema, model } from "mongoose";

const regSchema = new Schema({
    login: String,
    password: String,
    passwordAgain: String,
    isLoggedIn: {
        type: Boolean,
        default: false
    },
})

const reg = model("task", regSchema);

export default reg;