"use server";
import { deleteSnippets } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface sniffitsProps {
  params: {
    id: string;
  };
}

export default async function updateSniffet(props: sniffitsProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetsAction = deleteSnippets.bind(null, snippet.id);
  return (
    <div>
      <div className="flex m-4 flex-col items-center">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className="text-xl font-bold">{snippet.title}</h1>
          <div className="flex gap-10">
            <Link
              className="p-2 border rounded"
              href={`/snippets/${snippet.id}/edit`}
            >
              Edit
            </Link>
            <form action={deleteSnippetsAction}>
              <button className="p-2 border rounded">Delete</button>
            </form>
          </div>
        </div>
        <pre className="p-3 border rounded bg-gray-200 border-gray-200 w-full">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
