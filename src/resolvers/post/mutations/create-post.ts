import { prisma } from "../../../db";

interface createPostInput {
    title: string;
    username: string;
}

export const createPost = async (_parent: any, args: createPostInput) => {
    const post = await prisma.post.create({
        data: {
            title: args.title,
            username: args.username
        }
    });

    return post;
}