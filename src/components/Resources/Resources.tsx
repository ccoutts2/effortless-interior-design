import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

import { articles } from "./data";

// interface ResourcesProps {
//   showHeader?: boolean;
//   articleFilter: string;
// }

// const Resources = ({ showHeader = true, articleFilter }: ResourcesProps) => {
//   const filteredArticles = articles.filter(
//     (article) => article.articleFilter === articleFilter,
//   );

//   return (
//     <div className="p-4">
//       {showHeader && (
//         <h2 className="text-center text-xs capitalize italic lg:text-lg lg:not-italic">
//           tips & resources
//         </h2>
//       )}

//       <div className="no-scrollbar flex justify-start gap-4 overflow-x-auto overflow-y-hidden pt-4 capitalize md:justify-center md:gap-12 lg:gap-20 lg:pt-12">
//         {filteredArticles.map((article, index) => (
//           <article
//             key={index}
//             className="w-40 rounded-md text-center transition-transform duration-300 ease-in-out [flex:0_0_auto] hover:-translate-y-1 hover:shadow-md lg:w-[22rem]"
//           >
//             <Image width={500} height={500} src={article.src} alt="resources" />
//             <h3 className="p-1 text-sm lg:p-2">{article.title}</h3>
//             <Button label={article.continue} />
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Resources;

import type { PostItem } from "@/utils/types";

interface Props {
  posts: PostItem[];
}

const Resources = ({ posts }: Props) => {
  return (
    <section className="flex gap-4">
      <div className="no-scrollbar flow-y-hidden flex justify-start gap-8 overflow-x-auto pt-4 capitalize md:justify-center md:gap-12 lg:gap-20 lg:pt-12">
        {posts.map((post, index) => (
          <Link
            className="w-40 rounded-md text-center transition-transform duration-300 ease-in-out [flex:0_0_auto] hover:-translate-y-1 hover:shadow-md lg:w-[22rem]"
            href={`/resources/${post.id}`}
            key={index}
          >
            <Image alt={post.title} width={500} height={500} src={post.image} />
            <h3 className="p-1 text-sm lg:p-2"> {post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Resources;
