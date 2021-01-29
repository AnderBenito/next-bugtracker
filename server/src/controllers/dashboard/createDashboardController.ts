import { Request, Response } from "express";
import Dashboard from "../../models/Dashboard";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		const dashboard: Dashboard = {
			...req.body,
			userId: (req.user as any).id,
		};

		try {
			const newDashboard = await dashboardService.create(dashboard);
			res.status(201).send(newDashboard);
		} catch (error) {
			console.error(error);
			res.status(400).send("Dashboard cannot be created");
		}
	};
}
