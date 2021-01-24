import express from "express";
import passport from "passport";

const authRoute = express.Router();

authRoute.get(
	"/google",
	passport.authenticate("google", {
		scope: ["email", "profile"],
	})
);

authRoute.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		console.log(req.user);
		res.send("Google callback");
	}
);

export default authRoute;
