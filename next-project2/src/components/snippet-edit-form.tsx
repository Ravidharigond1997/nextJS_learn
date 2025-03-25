"use client";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editSnippets } from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState("");
  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const editSnippetsAction = editSnippets.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetsAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
