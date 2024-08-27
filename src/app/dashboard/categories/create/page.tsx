import CreateCategory from "@/components/categories/create-form";
import Breadcrumbs from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Category",
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/categories" },
          {
            label: "Create Category",
            href: "/dashboard/categories/create",
            active: true,
          },
        ]}
      />
      <CreateCategory />
    </main>
  );
}
