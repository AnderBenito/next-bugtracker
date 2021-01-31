import express from "express";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import {
	dashboardRepository,
	taskRepository,
} from "../../bootstrap/repositories";
import createTask from "../../controllers/task/createTask";
import getAllTaskByDashboardId from "../../controllers/task/getAllTaskByDashboardId";
import TaskService from "../../services/task/TaskService";
import DashboardService from "../../services/dashboard/DashboardService";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import getTaskById from "../../controllers/task/getTaskById";

const taskDashboardRoute = express.Router({ mergeParams: true });
const taskService = new TaskService(taskRepository);
const dashboardService = new DashboardService(dashboardRepository);

//GET--------------------------------
//Get all tasks by dashboard ID
taskDashboardRoute.get(
	"/",
	isAuthorizedRead(dashboardService),
	getAllTaskByDashboardId(taskService)
);

//Get task in dashboard by taskID
taskDashboardRoute.get("/:taskId", getTaskById(taskService));

//POST-------------------------------
//Post task in dashboard
taskDashboardRoute.post(
	"/",
	isAuthorizedWrite(dashboardService),
	createTask(taskService)
);

export default taskDashboardRoute;
