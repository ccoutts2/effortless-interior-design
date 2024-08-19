import Resources from "@/components/Resources/Resources";
import { PageHeader } from "@/components";
import { getPosts } from "@/utils/getPosts";

const Page = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageHeader header="resources" />
      {posts.length > 0 ? (
        <Resources posts={posts} />
      ) : (
        <p>No posts available</p>
      )}
    </>
  );
};

export default Page;
