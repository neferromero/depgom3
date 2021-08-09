/* User model definition */

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    phone: String,
    isRent: Boolean
});

UserSchema.path("email").validate(function (value) {
    return this.model("user").count({ email: value }).then(function(count) {
        return count < 1;
    });
}, "Email is already registered!");

const User = mongoose.model("user", UserSchema);

module.exports = User;