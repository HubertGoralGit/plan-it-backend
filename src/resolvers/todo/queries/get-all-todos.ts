import { prisma } from "../../../db";

export const getAllTodos = async () => {
    return await prisma.todo.findMany();
}