import { Request, Response } from "express";
import DashboardService from "../../services/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		console.log(req.user);
		const dashboard = req.body;

		try {
			const newDashboard = await dashboardService.create(dashboard);
			res.status(201).send(newDashboard);
		} catch (error) {
			console.error(error);
			res.status(400).send("Dashboard cannot be created");
		}
	};
}
