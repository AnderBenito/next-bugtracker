import { NextFunction, Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const userId = (req.user as any).id;
		const { dashboardId } = req.params;

		const dashboard = await dashboardService.getById(dashboardId);

		if (dashboard.isPublic) {
			next();
			return;
		}

		if (dashboard.userId !== userId) {
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
