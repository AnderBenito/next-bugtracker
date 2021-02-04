import express from "express";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import create from "../../controllers/task/create";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import getById from "../../controllers/task/getById";
import update from "../../controllers/task/update";
import deleteTask from "../../controllers/task/delete";
import { dashboardService, taskService } from "../../bootstrap/services";
import getAllByListId from "../../controllers/task/getAllByListId";

const taskListRoute = express.Router({ mergeParams: true });

//GET--------------------------------
//Get all tasks by list ID
taskListRoute.get(
	"/",
	isAuthorizedRead(dashboardService),
	getAllByListId(taskService)
);

//Get task in dashboard by taskID
taskListRoute.get(
	"/:taskId",
	isAuthorizedRead(dashboardService),
	getById(taskService)
);

//POST-------------------------------
//Post task in dashboard
taskListRoute.post(
	"/",
	isAuthorizedWrite(dashboardService),
	create(taskService)
);

//PUT--------------------------------
//Update task by Id
taskListRoute.put(
	"/:taskId",
	isAuthorizedWrite(dashboardService),
	update(taskService)
);

//DELETE-----------------------------
//Delete task by Id
taskListRoute.delete(
	"/:taskId",
	isAuthorizedWrite(dashboardService),
	deleteTask(taskService)
);

export default taskListRoute;
