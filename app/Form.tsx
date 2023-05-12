"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`http://localhost:3000//api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    setTitle("");
    router.refresh();
    if (!res.ok) console.log(res.message);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        className="my-8"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button className="mx-4" type="submit">
        Make a new post
      </button>
    </form>
  );
}
