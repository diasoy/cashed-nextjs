'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CategorySchema = z.object({
    name: z.string().min(3).max(15),
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

export const createCategory = async (prevSate: any, formData: FormData) => {
    try {
        const validatedFields = CategorySchema.safeParse(Object.fromEntries(formData.entries()));
        if (!validatedFields.success) {
            return {
                Error: validatedFields.error.flatten().fieldErrors,
            };
        }

        await prisma.category.create({
            data: {
                name: formData.get("name") as string,
                active: formData.get("status") === "on",
            },
        })
    } catch (error) {
        return { message: "Failed to create new category" };
    }

    revalidatePath("/dashboard/categories");
    redirect("/dashboard/categories");
}

export const deleteCategory = async (id: number) => {
    try {
        await prisma.category.delete({
            where: {
                id,
            },
        });
    }
    catch (error) {
        console.error("Database Error:", error);
    }

    revalidatePath("/dashboard/categories");
    redirect("/dashboard/categories");
}
