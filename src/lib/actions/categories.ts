'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { unstable_noStore } from "next/cache";


const CategorySchema = z.object({
    id: z.string(),
    name: z.string(),
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