var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    expiration_time: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Controls_User_Token', UserSchema);