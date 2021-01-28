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
		res.redirect("/");
	}
);

export default googleRoute;
