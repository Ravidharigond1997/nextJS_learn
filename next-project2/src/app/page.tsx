import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Snippets</h2>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      {snippets.length > 0 ? (
        <div className="flex flex-col gap-2">
          {snippets.map((snippet) => (
            <Link
              key={snippet.id}
              href={`/snippets/${snippet.id}`}
              className="flex justify-between items-center p-2 border rounded"
            >
              <div>{snippet.title}</div>
              <div>View</div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No snippets found.</p>
      )}
    </div>
  );
}
