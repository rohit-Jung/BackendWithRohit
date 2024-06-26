const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/newUsers");

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(plm);
module.exports = mongoose.model("usersModel", userSchema);