import express from "express";
import passport from "passport";

const googleRoute = express.Router();

googleRoute.get(
	"/",
	passport.authenticate("google", {
		scope: ["email", "profile"],
	})
);

googleRoute.get(
	"/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		console.log(req.user);

		//Redirect to frontend
		res.send("Google callback");
	}
);

export default googleRoute;
