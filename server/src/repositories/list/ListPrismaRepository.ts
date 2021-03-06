import { Prisma, PrismaClient } from "@prisma/client";
import List from "../../models/List";
import IListRepository from "./IListRepository";

export default class ListPrismaRepository implements IListRepository {
	private prisma;
	constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never>) {
		this.prisma = prisma;
	}

	getAll() {
		return this.prisma.list.findMany();
	}

	getAllByUserId(userId: string) {
		return this.prisma.list.findMany({ where: { dashboard: { userId } } });
	}

	getAllWithTasks() {
		return this.prisma.list.findMany({ include: { tasks: true } });
	}

	getAllWithTasksByDashboardId(dashboardId: string) {
		return this.prisma.list.findMany({
			where: { dashboardId },
			include: { tasks: { orderBy: { order: "asc" } } },
			orderBy: { order: "asc" },
		});
	}

	getAllByDashboardId(dashboardId: string) {
		return this.prisma.list.findMany({ where: { dashboardId } });
	}

	getById(id: string) {
		return this.prisma.list.findUnique({
			where: { id },
			include: { tasks: true },
		});
	}

	getByLastOrder(dashboardId: string) {
		return this.prisma.list.findFirst({
			where: { dashboardId },
			orderBy: { order: "desc" },
		});
	}

	create(list: List) {
		return this.prisma.list.create({ data: list });
	}

	update(list: List) {
		return this.prisma.list.update({ where: { id: list.id }, data: list });
	}

	delete(id: string) {
		return this.prisma.list.delete({ where: { id } });
	}
}
