'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const FormSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(15),
    active: z.boolean(),
    createdAt: z.string(),
})

export const getDataCategories = async (
    query: string,
    ) => {
    
    try {
        const categories = await prisma.category.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })
        return categories
    } catch (error) {
        console.error('Database Error:', error);
    }
}
