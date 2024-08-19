import Image from "next/image";
import Link from "next/link";

import type { PostItem } from "@/utils/types";

interface Props {
  posts: PostItem[];
}

const Resources = ({ posts }: Props) => {
  return (
    <section className="no-scrollbar flow-y-hidden flex max-h-[40rem] min-h-[20rem] justify-start gap-8 overflow-x-auto scroll-smooth pl-4 pt-4 capitalize md:justify-center md:gap-12 md:pl-[12rem] lg:gap-20 lg:px-32 lg:pt-12">
      {posts.map((post, index) => (
        <div className="relative flex h-full min-w-[16rem] flex-col gap-4 rounded-md text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md md:w-[16rem] lg:w-[22rem]">
          <div className="flex-[2]">
            <Image
              className="h-full w-full object-cover"
              alt={post.title}
              width={500}
              height={500}
              src={post.image}
            />
          </div>
          <h3 className="h-[20%] flex-[1] p-1 text-sm lg:p-2">{post.title}</h3>
          <Link
            href={`/resources/${post.id}`}
            key={index}
            className="absolute inset-0"
          />
        </div>
      ))}
    </section>
  );
};

export default Resources;
