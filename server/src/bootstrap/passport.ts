import passport from "passport";
import UserService from "../services/UserService";
import { userRepository } from "./repositories";

//Run passport config
import "../config/passport/googleAuth";

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
