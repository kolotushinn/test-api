export default class UserDto {
    id;
    username;
    roles;

    constructor(model) {
        this.id = model._id
        this.email = model.username;
        this.roles = model.roles;
    }
}
