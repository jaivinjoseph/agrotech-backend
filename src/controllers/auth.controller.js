import UserSchema from "../models/user.model.js";
const login = async (req, res, next) => {
  console.log(req.params);
  try {
    const user = await UserSchema.find({
      email: req.params.email,
      password: req.params.password,
    });
    if (user.length <= 0) {
      req.status(400).json({
        success: false,
        message: "user does not exist,try with valid credentials",
      });
    } else {
      res
        .status(200)
        .json({
          success: true,
          user_id: user[0]._id,
          message: "login successful",
        });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

const signup = async (req, res, next) => {
  const data = req.body;
  console.log(data.email);
  try {
    const user = await UserSchema.find({ email: req.body.email });
    if (user.length > 0) {
      res.status(400).json({
        success: false,
        message: "user already exist with this email,try with another email",
      });
    } else {
      const newUser = new UserSchema(data);
      await newUser.save();
      res.status(200).json({
        success: true,
        message: "User registered successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { signup, login };
