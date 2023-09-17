import ThemeToggle from "../components/ThemeToggle";
import Omg from "./omg.mdx";

//contentlayer
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
    </div>
  );
}
//no more contentlayer

export default function Home() {
  //contentlayer
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  //no more contentlayer

  const text = "I'm a nice boy!";

  return (
    <div>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <div>
        <p>hi mom. Good to see you today.</p>
        <p className="text-sm"> {text}</p>
        <div>
          <ThemeToggle />
          <Omg />
        </div>
      </div>
    </div>
  );
}
