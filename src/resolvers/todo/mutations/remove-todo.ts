import { prisma } from "../../../db";

interface Props {
    id: string;
}

export const removeTodo = async (_parent: any, args: Props) => {
    const todo = await prisma.todo.delete({
        where: {
            id: args.id
        }
    });

    return todo;
}