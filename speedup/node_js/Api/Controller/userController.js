// import User from "../Model/userModel.js";
import User from "../Model/userModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await new User({ name, email, password }).save();
    console.log(user);
    res.send("Data Sent Successfuly");
  } catch (error) {
    console.log("Error");
  }
};
