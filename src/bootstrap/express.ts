import express from "express";
import passport from "passport";

const app = express();

//Apply middlewares
app.use(passport.initialize());
app.use(passport.session());

export default app;
