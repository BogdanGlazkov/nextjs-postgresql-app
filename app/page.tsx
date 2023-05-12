import Link from "next/link";
import FormPost from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();

  return (
    <main className="py-8 px-48">
      <Link
        className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href={"/dashboard"}
      >
        Go to Dashboard
      </Link>
      <FormPost />
      {!data.length
        ? null
        : data.map((post) => (
            <h3 className="text-lg py-6" key={post.id}>
              {post.title}
            </h3>
          ))}
    </main>
  );
}
