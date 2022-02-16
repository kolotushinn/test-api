// Import Models
import UserModel from "../../models/User.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class UsersService {
    async getAllUsers() {
        const users = await UserModel.find();

        if (!users) {
            return res.status(404).json({ response: "Users Not Found!" });
        }

        return { users };
    }
}

export default new UsersService();
