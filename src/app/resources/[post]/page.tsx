import Markdown from "react-markdown";

import Link from "next/link";

import { getPostData } from "@/utils/getPosts";

const Post = async ({ params }: { params: { post: string } }) => {
  const postData = await getPostData(params.post);

  return (
    <section className="mx-auto mt-20 flex w-10/12 flex-col gap-5 md:w-1/2">
      <div className="flex justify-between">
        <Link
          href="/resources"
          className="flex flex-row place-items-center gap-1"
        >
          ← Back
        </Link>
        <article>
          <Markdown>{postData}</Markdown>
        </article>
      </div>
    </section>
  );
};

export default Post;
