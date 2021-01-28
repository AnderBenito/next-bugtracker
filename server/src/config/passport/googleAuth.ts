import passport from "passport";
import GoogleStrategy from "passport-google-oauth";
import { userRepository } from "../../bootstrap/repositories";
import googleAuthController from "../../controllers/auth/googleAuthController";

passport.use(
	new GoogleStrategy.OAuth2Strategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			callbackURL: process.env.GOOGLE_CALLBACK_URL!,
		},
		googleAuthController(userRepository)
	)
);
