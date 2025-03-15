import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
  params: { id: string };
}

export default async function SnippetEditPage({ params }: SnippetEditProps) {
  "use server";
  // Ensure params are available before using them
  if (!params?.id) {
    notFound();
  }

  const snippetId = Number(params.id);
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

// ✅ Mark the route as dynamic
export const dynamic = "force-dynamic";
