import IUserRepository from "./IUserRepository";
import { Prisma, PrismaClient } from "@prisma/client";
import User from "src/models/User";

export default class UserPrismaRepository implements IUserRepository {
	prisma;

	constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never>) {
		this.prisma = prisma;
	}

	save(user: User) {
		return this.prisma.user.create({ data: user });
	}

	findById(id: string) {
		return this.prisma.user.findUnique({ where: { id } });
	}

	findByGoogleId(googleId: string) {
		return this.prisma.user.findUnique({ where: { googleId } });
	}
}
