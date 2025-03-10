"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function SnippetsCreatePage() {
  async function createForm(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (!title || !code) return; // Prevent empty swsubmission

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  }

  return (
    <form action={createForm}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
