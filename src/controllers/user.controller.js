import UserSchema from "../models/user.model.js";

const getUserById = async (req, res, next) => {
  const user_id = req.params.user_id;
  try {
    const user = await UserSchema.find({ _id: user_id });
    if (user.length <= 0) {
      res
        .status(404)
        .json({ success: false, message: "This user does not exist" });
    } else {
      res.status(200).json({
        success: true,
        data: user[0],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { getUserById };
