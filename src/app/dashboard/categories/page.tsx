import CategoriesTable from "@/components/categories/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { title } from "@/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import { FiPlus } from "react-icons/fi";

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
        <h1 className={`${title.className} text-2xl`}>Categories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Link href="/dashboard/categories/create">
          <Button>
            <FiPlus className="mr-2" />
            Add Category
          </Button>
        </Link>
      </div>
      <Suspense key={query} fallback={<Skeleton />}>
        <CategoriesTable query={query} />
      </Suspense>
    </div>
  );
}
