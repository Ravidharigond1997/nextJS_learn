"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippets(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`); // ✅ Corrected the template string syntax
}

export async function deleteSnippets(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippets(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "title must be longer",
    };
  }

  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "code must be longer",
    };
  }
  if (!title || !code) return; // Prevent empty swsubmission
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  redirect("/");
}
