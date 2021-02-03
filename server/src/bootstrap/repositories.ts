import TaskPrismaRepository from "../repositories/task/TaskPrismaRepository";
import ListPrismaRepository from "../repositories/list/ListPrismaRepository";
import DashboardPrismaRepository from "../repositories/dashboard/DashboardPrismaRepository";
import UserPrismaRepository from "../repositories/user/UserPrismaRepository";
import prisma from "./prisma";

export const userRepository = new UserPrismaRepository(prisma);
export const dashboardRepository = new DashboardPrismaRepository(prisma);
export const listRepository = new ListPrismaRepository(prisma);
export const taskRepository = new TaskPrismaRepository(prisma);
