import { CreateCategory } from "@/components/categories/create-form";
import CategoriesTable from "@/components/categories/table";
import { Skeleton } from "@/components/ui/skeleton";
import { notoSerif } from "@/lib/fonts";
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
        <h1 className={`${notoSerif.className} text-4xl`}>Categories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateCategory />
      </div>
      <Suspense key={query} fallback={<Skeleton />}>
        <CategoriesTable query={query} />
      </Suspense>
    </div>
  );
}
