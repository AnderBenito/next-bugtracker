import express from "express";
import { taskRepository } from "../../bootstrap/repositories";
import createTask from "../../controllers/task/createTask";
import getAllTaskByDashboardId from "../../controllers/task/getAllTaskByDashboardId";
import TaskService from "../../services/task/TaskService";

const taskDashboardRoute = express.Router();
const taskService = new TaskService(taskRepository);

taskDashboardRoute.get("/", getAllTaskByDashboardId(taskService));

taskDashboardRoute.post("/", createTask(taskService));

export default taskDashboardRoute;
