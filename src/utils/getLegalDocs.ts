import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const getDocsData = async (fileName: string) => {
  const filePath = path.join(process.cwd(), `legalDocs/${fileName}`);

  const fileContent = await fs.readFile(filePath, "utf-8");

  const { content } = matter(fileContent);

  const window = new JSDOM("<!DOCTYPE html>").window;
  const purify = DOMPurify(window);
  const clean = purify.sanitize(content);

  return clean;
};
