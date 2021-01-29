import { Request, Response } from "express";
import DashboardService from "../../services/dashboard/DashboardService";

export default function (dashboardService: DashboardService) {
	return async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			const dashboard = await dashboardService.getById(id);

			//Check if dashboard is public
			if (dashboard.isPublic) {
				res.status(200).send(dashboard);
				return;
			}

			//Check if user is authorized
			if (dashboard.userId !== (req.user as any).id) {
				res.status(401).send("Unautorized dashboard");
				return;
			}

			res.status(200).send(dashboard);
		} catch (error) {
			console.error(error);
			res.status(400).send("Error getting dashboard");
		}
	};
}
