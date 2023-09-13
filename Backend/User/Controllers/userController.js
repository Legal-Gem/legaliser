const User = require('../Models/userSchema');

const saltRounds = 10;
async function userSignup(req, res) {
  try {
    const body = req.body;
    if (!body)
      return res.status(400).json({ error: "All fields required" });
    // Hashing the password using bcrypt
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);
    // Creating a new user
    const newUser = new User({
      username: body.username,
      email: body.email,
      password: hashedPassword
    });
    // Saving the user to the database
    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  }

  catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Error occured in signing up" });

  }
}
module.exports = {
  userSignup
}