import { Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		console.log(req.params);
		const { id } = req.params;

		try {
			const dashboard = await dashboardService.getById(id);
			res.status(200).send(dashboard);
		} catch (error) {
			console.error(error);
			res.status(400).send("Error getting dashboard");
		}
	};
}
