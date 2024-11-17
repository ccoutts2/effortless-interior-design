import type { PostItem } from "@/utils/types";
import ArticleCard from "../ArticleCard/ArticleCard";

interface Props {
  posts: PostItem[];
}

const Resources = ({ posts }: Props) => {
  return (
    <ol className="flex gap-4 space-x-6 overflow-x-hidden scroll-smooth pb-6 pl-4 md:mx-0 md:flex-wrap md:justify-center md:space-x-8 md:overflow-x-visible md:pb-0 lg:space-x-12">
      {posts.map((post) => (
        <li
          key={post.id}
          className="hover:shadow-lg0 relative w-64 flex-shrink-0 overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 md:w-72 lg:w-80"
        >
          <ArticleCard post={post} />
        </li>
      ))}
    </ol>
  );
};

export default Resources;
