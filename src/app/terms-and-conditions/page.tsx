import ReactMarkdown from "react-markdown";

import { getDocsData } from "@/utils/getLegalDocs";

export default async function Page() {
  const fileName = "terms-and-conditions.md";

  const content = await getDocsData(fileName);
  return <ReactMarkdown className="documentation">{content}</ReactMarkdown>;
}
