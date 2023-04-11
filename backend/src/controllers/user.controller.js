const User = require('../models/User');
const user_ctrl = {};

user_ctrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

user_ctrl.createUser = async (req, res) => {
    const { name, lastname, age, phone, email } = req.body;
    const new_user = new User({
        name,
        lastname,
        age,
        phone,
        email
    });
    await new_user.save();
};

user_ctrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

user_ctrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
};

user_ctrl.updateUser = async (req, res) => {
    const { name, lastname, age, phone, email } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        name,
        lastname,
        age,
        phone,
        email
    });
};

module.exports = user_ctrl;