const User = require("../models/User");
const { sendResponse, AppError, catchAsync } = require("../helpers/utils.js");
const bcrypt = require("bcryptjs");

const authControllers = {};

authControllers.loginWithEmail = catchAsync(async (req, res, next) => {
  //  Get data from request
  const { email, password } = req.body;

  // Validation
  let user = await User.findOne({ email }, "+password");
  if (!user) throw new AppError(400, "Invalid Credential", "Login error");

  // Process
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError(400, "Wrong password", "Login error");
  const accessToken = await user.generateToken();

  // Response
  sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    false,
    "Log in successfully"
  );
});

module.exports = authControllers;
