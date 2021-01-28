import { Prisma, PrismaClient } from "@prisma/client";
import Dashboard from "../../models/Dashboard";
import IDashboardRepository from "./IDashboardRepository";

export default class DashboardPrismaRepository implements IDashboardRepository {
	private prisma;

	constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never>) {
		this.prisma = prisma;
	}

	create(dashboard: Dashboard) {
		return this.prisma.dashboard.create({
			data: dashboard,
		});
	}

	getById(id: string) {
		return this.prisma.dashboard.findUnique({ where: { id } });
	}
}
