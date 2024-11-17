import Image from "next/image";
import Link from "next/link";

import type { PostItem } from "@/utils/types";

interface ArticleCardProps {
  post: PostItem;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <article>
      <div className="relative h-48 md:h-56 lg:h-64">
        <Image
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          alt={post.title}
          width={500}
          height={500}
          src={post.image}
        />
      </div>
      <h3 className="line-clamp-2 p-2 text-sm">{post.title}</h3>
      <Link href={`/resources/${post.id}`} className="absolute inset-0">
        <span className="vh">Read more about {post.title}</span>
      </Link>
    </article>
  );
};

export default ArticleCard;
