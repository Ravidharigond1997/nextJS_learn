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
  const snippeet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippeet) {
    return notFound();
  }

  const deleteSnippetsAction = deleteSnippets.bind(null, snippeet.id);
  return (
    <div>
      <div className="flex m-4 flex-col items-center">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className="text-xl font-bold">{snippeet.title}</h1>
          <div className="flex gap-10">
            <Link
              className="p-2 border rounded"
              href={`/snippets/${snippeet.id}/edit`}
            >
              Edit
            </Link>
            <form action={deleteSnippetsAction}>
              <button className="p-2 border rounded">Delete</button>
            </form>
          </div>
        </div>
        <pre className="p-3 border rounded bg-gray-200 border-gray-200 w-full">
          <code>{snippeet.code}</code>
        </pre>
      </div>
    </div>
  );
}
