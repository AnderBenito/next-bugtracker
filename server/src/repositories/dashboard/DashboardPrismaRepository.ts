import { Prisma, PrismaClient } from "@prisma/client";
import Dashboard from "../../models/Dashboard";
import IDashboardRepository from "./IDashboardRepository";

export default class DashboardPrismaRepository implements IDashboardRepository {
	private prisma;

	constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never>) {
		this.prisma = prisma;
	}

	getAll() {
		return this.prisma.dashboard.findMany();
	}

	getAllByUserId(userId: string) {
		return this.prisma.dashboard.findMany({
			where: { userId },
			include: {
				lists: { orderBy: { order: "asc" } },
			},
			orderBy: { updatedAt: "desc" },
		});
	}

	getById(id: string) {
		return this.prisma.dashboard.findUnique({ where: { id } });
	}

	create(dashboard: Dashboard) {
		return this.prisma.dashboard.create({
			data: dashboard,
		});
	}

	update(dashboard: Dashboard) {
		return this.prisma.dashboard.update({
			where: { id: dashboard.id! },
			data: dashboard,
		});
	}

	delete(id: string) {
		return this.prisma.dashboard.delete({ where: { id } });
	}
}
