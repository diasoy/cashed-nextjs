import { getDataCategories } from "@/lib/actions/categories";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { formatDateToLocal } from "@/lib/utils";
import { FaPenAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { DeleteCategory } from "./button";

export default async function CategoriesTable({ query }: { query: string }) {
  const categories = await getDataCategories(query);

  return (
    <Table className="bg-primary-foreground mt-5 rounded-md">
      <TableCaption>Table Category</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((category, index) => (
          <TableRow key={category.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>
              {category.active ? (
                <Badge>Active</Badge>
              ) : (
                <Badge variant="destructive">Inactive</Badge>
              )}
            </TableCell>
            <TableCell>
              {formatDateToLocal(category.createdAt.toString())}
            </TableCell>
            <TableCell className="flex gap-1 items-center">
              <Link href={`/dashboard/categories/${category.id}/edit`}>
                <Button variant="outline">
                  <FaPenAlt />
                </Button>
              </Link>
              <DeleteCategory id={category.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
