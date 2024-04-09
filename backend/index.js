const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const FormDataModel = require('./models/FormData');
const AdminDataModel = require('./models/AdminData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Login');

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await FormDataModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await FormDataModel.create({ email, password: hashedPassword });
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await FormDataModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/admin/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingAdmin = await AdminDataModel.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await AdminDataModel.create({ email, password: hashedPassword });
        res.json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminDataModel.findOne({ email });

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.json({ success: true, message: 'Admin login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
