import { PrismaClient } from "@prisma/client";
import UserPrismaRepository from "../repositories/user/UserPrismaRepository";
import app from "./express";
import initPassport from "./passport";

//Init DB connection with Prisma
const prisma = new PrismaClient();

//Init repositories
export const userRepository = new UserPrismaRepository(prisma);

//Init passport config and inject userRepository
initPassport(userRepository);

//Export express App
export default app;
