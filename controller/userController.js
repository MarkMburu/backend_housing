const user = require("../db/userQuery");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { hashPassword, validatePassword } = require("../Middlewares/password");
const { roles } = require('../roles');

const register = async (req, res, next) => {
  try {
    const { username, email, phone, role,password } = req.body;
    const hashedPassword = await hashPassword(password);
    user
      .create({
        email,
        password: hashedPassword,
        phone,
        username,
        role: role || "basic",
      })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => res.json(err));
  } catch (error) {
    next(error);
  }
};

const login = async(req, res, next) => {
  try {
    const { username, password } = req.body;
    user.getUser(username).then((users) => {
      if (!users[0]) {
        return res.json({
          auth: false,
          success: 0,
          message: "Invalid Username or Passowrd",
        });
      }
      const user = validatePassword(password, users[0].password);
      if (user) {
        users[0].password = undefined;
        const jsontoken = jwt.sign({ user: users[0] }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
        return res.status(200).json({
          data: {username: users[0].username,role:users[0].role},
          auth: true,
          success: 1,
          message: "logged in successfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          auth: false,
          success: 0,
          message: "Invalid Email or Passowrd",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    user
      .getAllUsers()
      .then((users) => {
        res.status(200).json({ data: users });
      })
      .catch((err) => res.status(404).json(err));
  } catch (error) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    user
      .getById(req.params.id)
      .then((users) => {
        res.status(200).json(users[0]);
      })
      .catch((err) => res.status(404).json(err));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    users
      .updateUser(req.params.id, req.body)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => res.status(404).json(err));
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    user
      .deleteUser(req.params.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.json(err));
  } catch (error) {
    next(error);
  }
};


const grantAccess = function(action, resource) {
    return async (req, res, next) => {
     try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
       return res.status(401).json({
        error: "You don't have enough permission to perform this action"
       });
      }
      next()
     } catch (error) {
      next(error)
     }
    }
   }
    
   const allowIfLoggedin = async (req, res, next) => {
    try {
     const user = res.locals.loggedInUser;
     if (!user)
      return res.status(401).json({
       error: "You need to be logged in to access this route"
      });
      req.user = user;
      next();
     } catch (error) {
      next(error);
     }
   }

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  allowIfLoggedin,
  grantAccess
};
