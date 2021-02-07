import express from "express";
import { listService } from "../../bootstrap/services";
import create from "../../controllers/list/create";
import getAllByDashboardId from "../../controllers/list/getAllByDashboardId";
import getById from "../../controllers/list/getById";
import update from "../../controllers/list/update";
import listExist from "../../middleware/list/listExist";
import taskListRoute from "../task/taskInList";

const listDashboardRoute = express.Router({ mergeParams: true });

listDashboardRoute.use("/:listId/task", listExist(listService), taskListRoute);

//GET--------------------------------------------------------
listDashboardRoute.get("/", getAllByDashboardId(listService));
listDashboardRoute.get("/:listId", getById(listService));

//POST--------------------------------------------------------
listDashboardRoute.post("/", create(listService));

//PUT--------------------------------------------------------
listDashboardRoute.put("/:listId", update(listService));

export default listDashboardRoute;
