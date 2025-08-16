import { registerNewUser,loginUser } from "../services/auth.service.js";


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;

    await registerNewUser({ username, email, password, phoneNumber });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
