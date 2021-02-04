import express from "express";
import create from "../../controllers/task/create";
import getById from "../../controllers/task/getById";
import update from "../../controllers/task/update";
import deleteTask from "../../controllers/task/delete";
import { taskService } from "../../bootstrap/services";
import getAllByListId from "../../controllers/task/getAllByListId";

const taskListRoute = express.Router({ mergeParams: true });

//GET--------------------------------
//Get all tasks by list ID
taskListRoute.get("/", getAllByListId(taskService));

//Get task in dashboard by taskID
taskListRoute.get("/:taskId", getById(taskService));

//POST-------------------------------
//Post task in dashboard
taskListRoute.post("/", create(taskService));

//PUT--------------------------------
//Update task by Id
taskListRoute.put("/:taskId", update(taskService));

//DELETE-----------------------------
//Delete task by Id
taskListRoute.delete("/:taskId", deleteTask(taskService));

export default taskListRoute;
