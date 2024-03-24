import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-icon-profile-picture-portrait-symbol-neutral-gender-silhouette-circle-button-avatar-264091577.jpg"
    },
},
{ timestamps: true });

const User= mongoose.model('User', userSchema);

export default User;

