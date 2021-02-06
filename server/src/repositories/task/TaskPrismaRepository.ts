import { Prisma, PrismaClient } from "@prisma/client";
import Task from "src/models/Task";
import ITaskRepository from "./ITaskRepository";

export default class TaskPrismaRepository implements ITaskRepository {
	private prisma;
	constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never>) {
		this.prisma = prisma;
	}

	getAll() {
		return this.prisma.task.findMany();
	}

	getAllByUserId(userId: string) {
		return this.prisma.task.findMany({
			where: { list: { dashboard: { userId } } },
		});
	}

	getById(id: string) {
		return this.prisma.task.findUnique({ where: { id } });
	}

	getAllByListId(listId: string) {
		return this.prisma.task.findMany({ where: { listId } });
	}

	create(task: Task) {
		return this.prisma.task.create({ data: task });
	}

	update(task: Task) {
		return this.prisma.task.update({ where: { id: task.id }, data: task });
	}

	delete(id: string) {
		return this.prisma.task.delete({ where: { id } });
	}
}
