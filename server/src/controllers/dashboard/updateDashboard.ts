import { Request, Response } from "express";
import Dashboard from "../../models/Dashboard";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		const { dashboardId } = req.params;

		const dashboard: Dashboard = {
			id: dashboardId,
			...req.body,
		};

		try {
			const updatedDashboard = await dashboardService.update(dashboard);
			res.status(201).send(updatedDashboard);
		} catch (error) {
			console.error(error);
			res.status(404).send(error.message);
		}
	};
}
