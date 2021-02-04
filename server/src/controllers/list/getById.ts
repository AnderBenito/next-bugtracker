import { Request, Response } from "express";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (req: Request, res: Response) => {
		const { listId } = req.params;

		try {
			const list = await listService.getById(listId);
			res.status(200).send(list);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
