export default class UserDto {
    username;
    id;

    constructor(model) {
        this.email = model.username;
        this.id = model._id
    }
}
