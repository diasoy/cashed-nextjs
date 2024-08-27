"use client";
import { useFormState } from "react-dom";
import { createCategory } from "@/lib/actions/categories";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export default function CreateCategory() {
  const [state, dispatch] = useFormState(createCategory, null);

  return (
    <main className="my-32">
      <h1 className="text-center text-lg">Create Category</h1>
      <form action={dispatch} className="w-96 mx-auto">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="name">Category Name</Label>
              <Input id="name" name="name" type="text" className="mt-4" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <Label htmlFor="name">Category Status</Label>
              <Switch id="status" name="status" className="mt-4" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-12 flex mx-auto">
          Create Category
        </Button>
      </form>
    </main>
  );
}
