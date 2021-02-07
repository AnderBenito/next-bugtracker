import { NextFunction, Request, Response } from "express";
import Dashboard from "../../models/Dashboard";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const userId = (req.user as any).id;
		const { dashboardId } = req.params;
		let dashboard: Dashboard;

		//Try to get dashboard by Id
		try {
			dashboard = await dashboardService.getById(dashboardId);
		} catch (error) {
			res.status(404).send(error.message);
			return;
		}

		//Check if user is owner
		if (dashboard.userId === userId) {
			next();
			return;
		}

		//Check if its private
		if (!dashboard.isPublic) {
			res
				.status(403)
				.send(
					"Unauthorized. You don't have permission to perform this operation"
				);
			return;
		}

		//Check if its GET method
		if (
			req.method === "POST" ||
			req.method === "DELETE" ||
			req.method === "PUT"
		) {
			res
				.status(403)
				.send(
					"Unauthorized. You don't have permission to perform this operation"
				);
			return;
		}

		next();
	};
}
