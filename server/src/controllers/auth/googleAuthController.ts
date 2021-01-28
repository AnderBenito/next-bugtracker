import GoogleStrategy from "passport-google-oauth";
import User from "../../models/User";
import UserService from "../../services/UserService";

export default function (userService: UserService) {
	return (
		_: string,
		__: string,
		profile: GoogleStrategy.Profile,
		done: GoogleStrategy.VerifyFunction
	) => {
		const user: User = {
			displayName: profile.displayName,
			email: profile.emails![0].value,
			avatarUrl: profile.photos![0].value,
			googleId: profile.id,
		};

		userService
			.findOrCreate(user)
			.then((user) => {
				return done(null, user);
			})
			.catch((error) => {
				console.log(error);
				return done(error, null);
			});
	};
}
