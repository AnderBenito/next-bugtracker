import passport from "passport";
import GoogleStrategy from "passport-google-oauth";
import PassportAuthController from "../../controllers/auth/PassportAuthController";
import IUserRepository from "../../repositories/user/IUserRepository";

export default function (userRepository: IUserRepository) {
	passport.use(
		new GoogleStrategy.OAuth2Strategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID!,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
				callbackURL: process.env.GOOGLE_CALLBACK_URL!,
			},
			PassportAuthController(userRepository)
		)
	);
}
