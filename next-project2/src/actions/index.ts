"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippets(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`); // ✅ Corrected the template string syntax
}

export async function deleteSnippets(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

export async function createSnippets(
  formState: { message: string },
  formData: FormData
) {
  try {
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

    throw new Error("Failed to save to database");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }
  revalidatePath("/");
  redirect("/");
}
