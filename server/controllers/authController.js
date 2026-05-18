const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const getMessage = require('../utils/messages');

exports.signup = async (req, res) => {
  try {
    // We receive 'lang' from your Frontend here
    const { name, email, password, lang } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: getMessage(lang, 'userExists') });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ 
      name, 
      email, 
      password: hashedPassword,
      language: lang 
    });
    await newUser.save();

    res.status(201).json({ message: getMessage(lang, 'registered') });
  } catch (error) {
    const lang = req.body.lang || 'en';
    res.status(500).json({ message: getMessage(lang, 'serverError') });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, lang } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: getMessage(lang, 'noAccount') });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: getMessage(lang, 'wrongPassword') });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'TEST_SECRET_KEY', // We will move this to .env later
      { expiresIn: '1h' }
    );

    res.status(200).json({ 
      result: existingUser, 
      token, 
      message: getMessage(lang, 'loginSuccess') 
    });
  } catch (error) {
    const lang = req.body.lang || 'en';
    res.status(500).json({ message: getMessage(lang, 'serverError') });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    // 1. Get lang for localized responses
    const { email, oldPassword, newPassword, lang } = req.body; 
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. SECURITY CHECK: Match Old Password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      // Return localized error message
      return res.status(400).json({ message: getMessage(lang, 'incorrectOldPass') });
    }

    // 3. Hash New Password & Save
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: getMessage(lang, 'passUpdated') });
  } catch (error) {
    res.status(500).json({ message: getMessage(req.body.lang, 'serverError') });
  }
};