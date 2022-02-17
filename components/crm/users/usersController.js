// Import Services
import usersService from "./usersService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

class UsersController {
    // * @route   GET http://localhost:5000/api/crm/users/all
    // * @desc    Get All Users
    // * @access  Private
    async getAllUsers(req, res, next) {
        try {
            const usersData = await usersService.getAllUsers(req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: usersData
            });
        } catch(err) {
            next(err);
        }
    }

    // * @route   GET http://localhost:5000/api/crm/users/:_id
    // * @desc    Get User By ID
    // * @access  Private
    async getUserById(req, res, next) {
        try {
            const userId = req.params._id;

            const userData = await usersService.getUserById(userId, req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: userData
            });
        } catch(err) {
            next(err);
        }
    }

    // * @route   DELETE http://localhost:5000/api/crm/users/delete/:_id
    // * @desc    Delete User By ID
    // * @access  Private
    async deleteUser(req, res, next) {
        try {
            const userId = req.params._id;

            const userData = await usersService.deleteUser(userId, req, res);

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

export default new UsersController();
