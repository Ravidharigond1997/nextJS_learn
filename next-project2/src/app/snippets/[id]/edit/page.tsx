import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
  params: { id: string }; // ✅ Ensure correct type
}

export default async function SnippetEditPage({ params }: SnippetEditProps) {
  console.log(params, "params");

  if (!params?.id) {
    notFound(); // 🚨 Handle missing params
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

// ✅ Ensure this route is dynamic
export const dynamic = "force-dynamic";
