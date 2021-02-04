import { NextFunction, Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const userId = (req.user as any).id;
		const { dashboardId } = req.params;

		const dashboard = await dashboardService.getById(dashboardId);

		if (dashboard.userId === userId) {
			next();
			return;
		}

		if (!dashboard.isPublic) {
			res
				.status(403)
				.send(
					"Unauthorized. You don't have permission to perform this operation"
				);
			return;
		}

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
