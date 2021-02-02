import express from "express";
import getAllTask from "../../controllers/task/getAllTask";
import { taskService } from "../../bootstrap/services";

const taskRoute = express.Router();

taskRoute.get("/", getAllTask(taskService));

export default taskRoute;
