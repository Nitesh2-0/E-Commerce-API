const User = require('../models/userModel');
const Product = require('../models/productMode')
const bcrypt = require('bcrypt');
const { generateToken } = require('../jwt')

exports.home = (req, res, next) => {
  // res.status(200).json('User come from Backend.');
  res.render('home')
};

exports.sellerProfile = (req,res,next) => {
  res.render('sellerProfile')
}

exports.register = async (req, res, next) => {
  try {
    const { name, username, email, gender, password } = req.body;

    let existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'Email or username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, username, email, gender, password: hashedPassword });

    const response = await user.save();
    const payload = {
      id: response._id,
      username: response.username
    }

    const token = generateToken(payload)
    console.log('Token : ' + token);

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username && !email) {
      return res.status(400).json({ success: false, error: 'Username or email is required' });
    }
    if (!password) {
      return res.status(400).json({ success: false, error: 'Password is required' });
    }

    const user = await User.findOne({ $or: [{ email }, { username }] }).select('+password');

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid Credentials' });
    }

    if (!user.password) {
      return res.status(500).json({ success: false, error: 'Internal Server Error: Password not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid Password' });
    }

    const payload = {
      id: user.id,
      username: user.username
    }

    const token = generateToken(payload);
    console.log("Token : " + token);

    res.status(200).json({ success: true, message: 'User successfully logged in' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

exports.products = async (req, res, next) => {
  try {
    const { productName, productPrice, offers, stockQuantity } = req.body;
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No images uploaded' });
    }
    const productImage = req.files.map(file => file.path)
    const product = new Product({ productName, productPrice,productImage, offers, stockQuantity })
    await product.save();
    res.status(201).json({ success: true, message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.readAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error: error.message })
  }
}

exports.findProducts = async (req, res) => {
  try {
    const allProducts = await Product.find()
    res.status(200).json({ success: true, allProducts })
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: true, error: error.message })
  }
}
