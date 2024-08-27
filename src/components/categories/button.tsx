import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { deleteCategory } from "@/lib/actions/categories";

export function DeleteCategory({ id }: { id: number }) {
  const handleDelete = deleteCategory.bind(null, id);
  return (
    <form action={handleDelete}>
      <Button variant="outline">
        <FaTrashAlt />
      </Button>
    </form>
  );
}
