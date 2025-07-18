const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    role: { type: String, enum: ["developer", "admin"], default: "developer"}
});

module.exports = mongoose.model("User", userSchema);