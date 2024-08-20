import { getDataCategories } from "@/lib/actions/categories";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Badge } from "../badge";
import { formatDateToLocal } from "@/lib/utils";

export default async function CategoriesTable({ query }: { query: string }) {
  const categories = await getDataCategories(query);

  return (
    <Table>
      <TableCaption>Table Category</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Active</TableHead>
          <TableHead>Created At</TableHead>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
