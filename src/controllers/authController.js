// controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.oauthAuth = async (req, res) => {
  try {
    const { email, firstName, lastName, providerId, provider } = req.body;

    let user = await User.findOne({
      $or: [
        { email },
        { [`${provider}Id`]: providerId }
      ]
    });

    if (!user) {
      user = new User({
        email,
        firstName,
        lastName,
        [`${provider}Id`]: providerId
      });
    } else {
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      user[`${provider}Id`] = providerId;
    }

    await user.save();

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Authentication successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('OAuth auth error:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
};