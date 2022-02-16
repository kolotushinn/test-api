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
            const usersData = await usersService.getAllUsers();

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: usersData
            });
        } catch(err) {
            next(err);
        }
    }


}

export default new UsersController();
