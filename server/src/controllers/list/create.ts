import { Request, Response } from "express";
import List from "../../models/List";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (req: Request, res: Response) => {
		const { dashboardId } = req.params;

		const list: List = {
			...req.body,
			dashboardId,
		};

		try {
			const newList = await listService.create(list);
			res.status(201).send(newList);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
