import express from "express";
import getAllTask from "../../controllers/task/getAllTask";
import { taskRepository } from "../../bootstrap/repositories";
import TaskService from "../../services/task/TaskService";

const taskRoute = express.Router();

const taskService = new TaskService(taskRepository);

taskRoute.get("/", getAllTask(taskService));

export default taskRoute;
