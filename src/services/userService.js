import db from '../sequelize/models';


class UserService {
  static async loginUser(email) {
    try {
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
