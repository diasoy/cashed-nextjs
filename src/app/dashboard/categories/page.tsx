import { CreateCategory } from "@/components/ui/categories/create-form";
import CategoriesTable from "@/components/ui/categories/table";
import { montserrat } from "@/lib/fonts";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${montserrat.className} text-2xl font-medium`}>
          Categories
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateCategory />
      </div>
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <CategoriesTable query={query} />
      </Suspense>
    </div>
  );
}
