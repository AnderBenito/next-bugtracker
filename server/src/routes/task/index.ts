import express from "express";
import getAll from "../../controllers/task/getAll";
import { taskService } from "../../bootstrap/services";

const taskRoute = express.Router();

taskRoute.get("/", getAll(taskService));

export default taskRoute;
