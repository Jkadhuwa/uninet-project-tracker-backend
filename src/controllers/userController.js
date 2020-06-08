import UserService from '../services/userService';
import { comparePasswords, generateToken } from '../utils/userUtils';

class UserController {
  static async userLogin(req, res) {
    const { email, password } = req.body;
    const user = await UserService.loginUser(email);
    if (!user || !comparePasswords(password, user.password)) {
      return res.status(401).json({
        message: 'Email or Password is incorrect!!',
      });
    }
    const token = generateToken(user);

    return res.status(200).json({
      token,
    });
  }
}

export default UserController;
