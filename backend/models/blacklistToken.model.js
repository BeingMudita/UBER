const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});

// Prevent model redefinition
const BlacklistToken = mongoose.models.BlacklistToken || mongoose.model("BlacklistToken", blacklistTokenSchema);

module.exports = BlacklistToken;
