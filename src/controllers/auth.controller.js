import UserSchema from "../models/user.model";
const login = async (req, res, next) => {
  try {
    const user = await UserSchema({
      email: req.body.email,
      password: req.body.password,
    });
    if (user.length <= 0) {
      req.status(400).json({
        success: false,
        message: "user does not exist,try with valid credentials",
      });
    } else {
      res.status(200).json({ success: true, user_id: user[0]._id });
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
  try {
    const newUser = new UserSchema(data);
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { signup, login };
