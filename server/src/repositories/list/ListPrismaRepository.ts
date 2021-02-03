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

	getById(id: string) {
		return this.prisma.list.findUnique({ where: { id } });
	}

	getAllByDashboardId(dashboardId: string) {
		return this.prisma.list.findMany({ where: { dashboardId } });
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
