import { prisma } from "../../../db";

export const getAllPosts = async () => {
    return await prisma.post.findMany();
}