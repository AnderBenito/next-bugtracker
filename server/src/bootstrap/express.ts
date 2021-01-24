import express from "express";
import passport from "passport";
import session from "express-session";
import connectRedis from "connect-redis";
import redisClient from "./redis";

const RedisStore = connectRedis(session);

const app = express();

//Apply middlewares
app.use(
	session({
		store: new RedisStore({ client: redisClient }),
		secret: process.env.SESSION_SECRET!,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);
app.use(passport.initialize());
app.use(passport.session());

export default app;
