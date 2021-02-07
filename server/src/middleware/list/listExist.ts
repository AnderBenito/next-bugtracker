import { NextFunction, Request, Response } from "express";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const { listId } = req.params;

		try {
			await listService.getById(listId);
			next();
		} catch (error) {
			res.status(404).send(error.message);
		}
	};
}
