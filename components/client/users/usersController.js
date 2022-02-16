// Import Engine
import bcrypt from "bcrypt";

// Import Models
import UserModel from "../../models/User.js";

// Import Services
import TokenService from "../../services/tokenService.js";

// Import DTOs
import UserDto from "../../../dtos/UserDto.js";

// Import Validation For Forms
import { validateLoginInput, validateRegistrationInput } from "../../../utils/validation/users/index.js";

class UserController {
    registration(req, res) {
        try {

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: "OK!",
            })
        } catch(err) {
            return res.status(500).json({
                statusCode: 500,
                stringStatus: "Error",
                message: `Something went wrong or you entered incorrect data ${err}. Please try again!`
            });
        }
    }
}

export default new UserController();
