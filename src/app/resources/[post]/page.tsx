import styles from "./page.module.css";

import ReactMarkdown from "react-markdown";

import Link from "next/link";

import { getPostData } from "@/utils/getPosts";

const Post = async ({ params }: { params: { post: string } }) => {
  const postData = await getPostData(params.post);

  return (
    <section>
      <Link href="/resources" className="p-4 text-lg md:px-12 lg:px-32">
        ← Back
      </Link>
      <div className="mx-auto flex w-10/12 flex-col gap-5 pt-4 md:w-1/2">
        <article className={styles.markdown}>
          <ReactMarkdown>{postData}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default Post;
