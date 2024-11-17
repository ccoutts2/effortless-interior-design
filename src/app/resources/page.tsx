import Resources from "@/components/Resources/Resources";
import { PageHeader } from "@/components";
import { getPosts } from "@/utils/getPosts";
import { PostItem } from "@/utils/types";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const selectedCategory = searchParams.category as string;

  const posts: PostItem[] = await getPosts();

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = !selectedCategory
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <main>
      <PageHeader header="resources" />
      <nav className="flex w-full justify-end px-4 md:p-12 lg:px-32">
        <ul className="flex gap-4">
          <li>
            <Link
              className={!selectedCategory ? "bg-red font-bold" : ""}
              href="/resources"
            >
              All
            </Link>
          </li>
          {categories.map((category, index) => (
            <li>
              <Link
                className={selectedCategory === category ? "font-bold" : ""}
                href={`?category=${category}`}
                key={index}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {filteredPosts.length > 0 ? (
        <Resources posts={filteredPosts} />
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}
