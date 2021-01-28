import UserPrismaRepository from "../repositories/user/UserPrismaRepository";
import prisma from "./prisma";

export const userRepository = new UserPrismaRepository(prisma);
