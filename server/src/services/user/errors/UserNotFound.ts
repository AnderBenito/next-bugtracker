export default class UserNotFound extends Error {
	constructor(id: string) {
		const message = `User with id: ${id} not found`;

		super(message);
		this.name = "UserNotFound";
	}
}
