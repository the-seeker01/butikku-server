const express = require("express");
const { signup , login, verifyotp, profile } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/login",login);

userRouter.post("/verify-otp",verifyotp);

userRouter.post("/profile",profile);

module.exports = userRouter;