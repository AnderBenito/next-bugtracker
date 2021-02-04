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

	getAllWithTasks() {
		return this.prisma.list.findMany({ include: { tasks: true } });
	}

	getAllWithTasksByDashboardId(dashboardId: string) {
		return this.prisma.list.findMany({
			where: { dashboardId },
			include: { tasks: true },
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
