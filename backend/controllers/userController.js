import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Log Out User / clear cookie
// @route   GET /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get User profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Get Users
// @route   GET /api/users/
// @access  Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Delete Users
// @route   DELETE /api/users/:id
// @access  Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});

// @desc    Get User by ID
// @route   GET /api/users/:id
// @access  Private / Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};

//path: backend/models/userModel.js
