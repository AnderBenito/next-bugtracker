import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
	if (!req.isAuthenticated()) {
		res.status(401).send("User not authenticated");
		return;
	}
	next();
};
