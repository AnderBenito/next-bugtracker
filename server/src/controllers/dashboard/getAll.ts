import { Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		const userId = (req.user as any).id;
		try {
			const dashboards = await dashboardService.getAllByUserId(userId);
			res.status(200).send(dashboards);
		} catch (error) {
			res.status(400).send("Not found");
		}
	};
}
