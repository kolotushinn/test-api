// Import Services
import userService from "./usersService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

// Import Validation For Forms
import { validateLoginInput, validateRegistrationInput } from "../../../utils/validation/users/index.js";

class UserController {
    // * @route   POST http://localhost:5000/api/client/users/registration
    // * @desc    User registration
    // * @access  Public
    async registration(req, res, next) {
        try {
            const { errors, isValid } = validateRegistrationInput(req.body);

            // Validation
            if (!isValid) {
                return next(ApiError.BadRequest("Validations Error!", errors));
            }

            const { firstname, lastname, username, password } = req.body;

            const userData = await userService.registration(
                firstname,
                lastname,
                username,
                password
            );
            
            // Set Cookie
            res.cookie(`refreshToken`, userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: userData
            });
        } catch(err) {
            next(err);
        }
    }

    // * @route   POST http://localhost:5000/api/client/users/login
    // * @desc    User login
    // * @access  Public
    async login(req, res, next) {
        try {
            const { errors, isValid } = validateLoginInput(req.body);

            // Validation
            if (!isValid) {
                return next(ApiError.BadRequest("Validations Error!", errors));
            }

            const { username, password } = req.body;

            const userData = await userService.login(
                username,
                password
            );

            // Set Cookie
            res.cookie(`refreshToken`, userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: userData
            });
        } catch(err) {
            next(err);
        }
    }

    // * @route   POST http://localhost:5000/api/client/users/settings
    // * @desc    User settings
    // * @access  Private
    async settings(req, res, next) {
        try {
            const { firstname, lastname } = req.body;

            const userData = await userService.settings(firstname, lastname, req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: userData
            });
        } catch(err) {
            next(err);
        }
    }
}

export default new UserController();
