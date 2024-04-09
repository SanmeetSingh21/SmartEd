const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

AdminDataSchema.pre('save', async function(next) {
    try {
        const admin = this;
        if (!admin.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(admin.password, salt);
        admin.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

const AdminDataModel = mongoose.model('AdminData', AdminDataSchema);

module.exports = AdminDataModel;
