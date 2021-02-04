import { Request, Response } from "express";
import ListService from "../../services/list/ListService";

export default function (listService: ListService) {
	return async (req: Request, res: Response) => {
		const { dashboardId } = req.params;

		try {
			const lists = await listService.getAllByDashboardId(dashboardId);
			res.status(200).send(lists);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
