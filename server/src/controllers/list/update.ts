import { Request, Response } from "express";

import List from "../../models/List";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (req: Request, res: Response) => {
		const { listId } = req.params;

		const list: List = {
			id: listId,
			...req.body,
		};

		try {
			const updatedList = await listService.update(list);
			res.status(201).send(updatedList);
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	};
}
