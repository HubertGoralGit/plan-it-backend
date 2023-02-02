import { prisma } from "../../../db";

interface Props {
    id: string;
    title: string;
}

export const editTodo = async (_parent: any, args: Props) => {
    const todo = await prisma.todo.update({
        where: {
            id: args.id
        },
        data: {
            title: args.title
        }
    })

    return todo;
}