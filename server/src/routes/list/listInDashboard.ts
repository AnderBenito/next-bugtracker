import express from "express";
import { listService } from "../../bootstrap/services";
import create from "../../controllers/list/create";
import getAllByDashboardId from "../../controllers/list/getAllByDashboardId";
import getById from "../../controllers/list/getById";

const listDashboardRoute = express.Router({ mergeParams: true });

//GET--------------------------------------------------------
listDashboardRoute.get("/", getAllByDashboardId(listService));
listDashboardRoute.get("/:listId", getById(listService));

//POST--------------------------------------------------------
listDashboardRoute.post("/", create(listService));

export default listDashboardRoute;
