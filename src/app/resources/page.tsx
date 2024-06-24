"use client";
import { useState } from "react";

import Resources from "@/components/Resources/Resources";
import { PageHeader } from "@/components";

const Page = () => {
  const [selectedArticle, setSelectedArticle] = useState("all posts");

  return (
    <>
      <PageHeader header="resources" />
      <section className="centered flex-col">
        <nav>
          <ul className="centered cursor-pointer gap-12">
            <li
              className={selectedArticle === "all posts" ? "font-bold" : ""}
              onClick={() => setSelectedArticle("all posts")}
            >
              All Posts
            </li>
            <li
              className={selectedArticle === "articles" ? "font-bold" : ""}
              onClick={() => setSelectedArticle("articles")}
            >
              Articles
            </li>
            <li
              className={selectedArticle === "videos" ? "font-bold" : ""}
              onClick={() => setSelectedArticle("videos")}
            >
              Videos
            </li>
          </ul>
        </nav>
        <Resources showHeader={false} articleFilter={selectedArticle} />
      </section>
    </>
  );
};

export default Page;
