import express from "express";
import getAll from "../../controllers/list/getAll";
import { listService } from "../../bootstrap/services";

const listRoute = express.Router();

listRoute.get("/", getAll(listService));

export default listRoute;
