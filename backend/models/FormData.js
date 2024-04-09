const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

FormDataSchema.pre('save', async function(next) {
    try {
        const user = this;
        if (!user.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

const FormDataModel = mongoose.model('FormData', FormDataSchema);

module.exports = FormDataModel;
