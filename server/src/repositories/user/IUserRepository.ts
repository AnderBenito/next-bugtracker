import User from "src/models/User";

export default interface IUserRepository {
	save: (user: User) => Promise<User>;
	findById: (id: string) => Promise<User | null>;
	findByGoogleId: (googleId: string) => Promise<User | null>;
}
