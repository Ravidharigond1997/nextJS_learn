"use client";
import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  console.log(snippet, "snippetData");
  return <div>Hello</div>;
}
