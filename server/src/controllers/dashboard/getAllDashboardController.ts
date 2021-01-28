import { Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (_: Request, res: Response) => {
		try {
			const dashboards = await dashboardService.getAll();
			res.status(200).send(dashboards);
		} catch (error) {
			res.status(400).send("Not found");
		}
	};
}
