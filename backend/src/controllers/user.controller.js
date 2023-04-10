const User = require('../models/User');
const user_ctrl = {};

user_ctrl.getUser = async (req, res) => {
    const users = await User.find();
    const users_data = await users.json();
    return users_data;
};

user_ctrl.createUser = async (req, res) => {
    const { name, lastname, age, phone, email } = req.body;
    const new_user = new User({
        name: name,
        lastname: lastname,
        age: age,
        phone: phone,
        email: email
    });
    await new_user.save();
};

user_ctrl.getUser = async (req, res) => {
    
}

user_ctrl.getUser = async (req, res) => {
    
}

user_ctrl.getUser = async (req, res) => {
    
}