import { Request, Response } from "express";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (_: Request, res: Response) => {
		try {
			const lists = await listService.getAll();
			res.status(200).send(lists);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
