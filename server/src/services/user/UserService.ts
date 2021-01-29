import User from "../../models/User";
import IUserRepository from "../../repositories/user/IUserRepository";
import UserNotFound from "./errors/UserNotFound";

export default class UserService {
	repository: IUserRepository;

	constructor(repository: IUserRepository) {
		this.repository = repository;
	}

	async findOrCreate(user: User) {
		if (!user.googleId) throw new Error("Google Id not provided");

		const foundUser = await this.repository.findByGoogleId(user.googleId);

		if (foundUser) return foundUser;

		const newUser = await this.repository.save(user);

		return newUser;
	}

	async findById(id: string) {
		const user = await this.repository.findById(id);

		if (!user) throw new UserNotFound(id);

		return user;
	}
}
