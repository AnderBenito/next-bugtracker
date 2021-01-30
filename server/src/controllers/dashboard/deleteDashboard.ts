import { Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			const dashboard = await dashboardService.delete(id);
			res.status(200).send(dashboard);
		} catch (error) {
			console.error(error);
			res.status(404).send(error.message);
		}
	};
}
