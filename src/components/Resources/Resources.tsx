import Image from "next/image";

import { Button } from "../buttons/Button/Button";

const Resources = () => {
  const articles = [
    {
      src: "/assets/images/eid7.jpg",
      title: "key design lessons from lucy cunningham's...",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid8.jpg",
      title: "english country-house style and the privelege of...",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid11.jpg",
      title: "how to create a fabric scheme for your interior...",
      href: "/",
      continue: "continue reading",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-xs capitalize italic xl:text-lg xl:not-italic">
        tips & resources
      </h2>
      <div className="no-scrollbar flex justify-start gap-4 overflow-x-auto overflow-y-hidden pt-4 capitalize md:justify-center md:gap-12 xl:gap-20 xl:pt-12">
        {articles.map((article, index) => (
          <article
            key={index}
            className="w-40 rounded-md text-center transition-transform duration-300 ease-in-out [flex:0_0_auto] hover:-translate-y-1 hover:shadow-md xl:h-[30rem] xl:w-[22rem]"
          >
            <Image width={500} height={500} src={article.src} alt="resources" />
            <h3 className="p-1 text-sm xl:p-2">{article.title}</h3>
            <Button label={article.continue} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Resources;
