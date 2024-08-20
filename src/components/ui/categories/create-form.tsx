import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export function CreateCategory() {
  return (
    <Link
      href="/dashboard/categories/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <FiPlus className="h-5 md:mr-2" />
      <span className="hidden md:block">Create Category</span>
    </Link>
  );
}
