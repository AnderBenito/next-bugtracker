import User from "src/models/User";

export default interface IUserRepository {
	saveUser: (user: User) => Promise<User>;
	findById: (id: string) => Promise<User | null>;
	findByGoogleId: (googleId: string) => Promise<User | null>;
}
