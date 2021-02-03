import express from "express";
import getAllList from "../../controllers/list/getAllList";
import { listService } from "../../bootstrap/services";

const listRoute = express.Router();

listRoute.get("/", getAllList(listService));

export default listRoute;
