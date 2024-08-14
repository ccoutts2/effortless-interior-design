import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

import type { PostItem } from "./types";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPosts = async (): Promise<PostItem[]> => {
  const fileNames = await fs.readdir(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        category: matterResult.data.category,
        image: matterResult.data.image,
      };
    }),
  );

  return allPostsData.sort((a, b) => {
    const format = "DD-MM-YY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isAfter(dateTwo)) {
      return -1;
    } else if (dateTwo.isBefore(dateOne)) {
      return 1;
    } else return 0;
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContent = await fs.readFile(fullPath, "utf-8");

  const { content } = matter(fileContent);

  const window = new JSDOM("<DOCTYPE html>").window;
  const purify = DOMPurify(window);
  const clean = purify.sanitize(content);

  return clean;
};
