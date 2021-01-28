import DashboardPrismaRepository from "../repositories/dashboard/DashboardPrismaRepository";
import UserPrismaRepository from "../repositories/user/UserPrismaRepository";
import prisma from "./prisma";

export const userRepository = new UserPrismaRepository(prisma);
export const dashboardRepository = new DashboardPrismaRepository(prisma);
