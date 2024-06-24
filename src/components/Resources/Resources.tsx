import Image from "next/image";

import { Button } from "@/components";

import { articles } from "./data";

interface ResourcesProps {
  showHeader?: boolean;
  articleFilter: string;
}

const Resources = ({ showHeader = true, articleFilter }: ResourcesProps) => {
  const filteredArticles = articles.filter(
    (article) => article.articleFilter === articleFilter,
  );

  return (
    <div className="p-4">
      {showHeader && (
        <h2 className="text-center text-xs capitalize italic lg:text-lg lg:not-italic">
          tips & resources
        </h2>
      )}

      <div className="no-scrollbar flex justify-start gap-4 overflow-x-auto overflow-y-hidden pt-4 capitalize md:justify-center md:gap-12 lg:gap-20 lg:pt-12">
        {filteredArticles.map((article, index) => (
          <article
            key={index}
            className="w-40 rounded-md text-center transition-transform duration-300 ease-in-out [flex:0_0_auto] hover:-translate-y-1 hover:shadow-md lg:w-[22rem]"
          >
            <Image width={500} height={500} src={article.src} alt="resources" />
            <h3 className="p-1 text-sm lg:p-2">{article.title}</h3>
            <Button label={article.continue} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Resources;
