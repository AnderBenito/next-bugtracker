import passport from "passport";
import IUserRepository from "../repositories/user/IUserRepository";
import UserService from "../services/UserService";
import googleAuthConfig from "../config/passport/googleAuth";

//Run passport config

export default function (userRepository: IUserRepository) {
	googleAuthConfig(userRepository);

	passport.serializeUser((user, done) => {
		done(null, (user as any).id);
	});

	passport.deserializeUser((id, done) => {
		const userService = new UserService(userRepository);
		userService
			.findById(id as string)
			.then((user) => {
				return done(null, user);
			})
			.catch((error) => {
				done(error, undefined);
			});
	});
}
