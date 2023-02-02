import { prisma } from "../../../db";

interface Props {
    title: string;
}

export const createTodo = async (_parent: any, args: Props) => {
    const todo = await prisma.todo.create({
        data: {
            title: args.title,
        }
    });

    return todo;
}