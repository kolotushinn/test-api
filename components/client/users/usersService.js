// Import Engine
import bcrypt from "bcrypt";

// Import Models
import UserModel from "../../models/User.js";
import RoleModel from "../../models/Role.js";

// Import Services
import TokenService from "../../services/tokenService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

// Import DTOs
import UserDto from "../../../dtos/UserDto.js";

class UsersService {
    async registration(firstname, lastname, username, password) {
        const user = await UserModel.findOne({ username });

        if (user) {
            throw ApiError.BadRequest("Username already exists!");
        }

        // Hash Password
        const hashPassword = await bcrypt.hash(password, 3);

        // Find User Role
        const userRole = await RoleModel.findOne({ value: "USER" });

        // Create New User
        const newUser = await UserModel.create({
            firstname,
            lastname,
            username,
            password: hashPassword,
            roles: [userRole.value]
        });

        // Generate Tokens
        const userDto = new UserDto(newUser);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async login(username, password) {
        const user = await UserModel.findOne({ username });

        if (!user) {
            throw ApiError.NotFound("User Not Found!");
        }

        // Verify Password
        const verifyPassword = await bcrypt.compare(password, user.password);

        if (!verifyPassword) {
            throw ApiError.BadRequest("The username or password you entered is incorrec!");
        }

        // Generate Tokens
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async settings(firstname, lastname, req, res) {
        const user = await UserModel.findOne({ _id: req.user.id });

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (firstname) {
            user.firstname = firstname;
        }

        if (lastname) {
            user.lastname = lastname;
        }

        user.save();

        return {
            firstname: user.firstname,
            lastname: user.lastname
        }
    }
}

export default new UsersService();
