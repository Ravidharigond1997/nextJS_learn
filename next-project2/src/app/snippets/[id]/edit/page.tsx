"use server";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
  params: { id: string };
}

export default async function SnippetEditPage({ params }: SnippetEditProps) {
  if (!params || !params.id) {
    notFound(); // Handle cases where params is missing
  }

  const snippetId =await Number(params.id);
  if (isNaN(snippetId)) {
    notFound();
  }

  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
