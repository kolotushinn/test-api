// Import Models
import UserModel from "../../models/User.js";
import TokenModel from "../../models/Token.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class UsersService {
    async getAllUsers(req, res) {
        const users = await UserModel.find();

        if (!users) {
            return res.status(404).json({ response: "Users Not Found!" });
        }

        return { users };
    }

    async getUserById(userId, req, res) {
        const user = await UserModel.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ response: "User Not Found!" });
        }

        return { user };
    }

    async deleteUser(userId, req, res) {
        const user = await UserModel.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ response: "User Not Found!" });
        }

        await UserModel.deleteOne({ _id: userId });
        await TokenModel.deleteOne({ user: userId });

        const users = await UserModel.find();

        return { users };
    }
}

export default new UsersService();
