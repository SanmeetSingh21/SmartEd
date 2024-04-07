const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Hash password before saving
FormDataSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hash = await bcrypt.hash(user.password, salt);
        // Replace plain password with hashed password
        user.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

const FormDataModel = mongoose.model('FormData', FormDataSchema);

module.exports = FormDataModel;
