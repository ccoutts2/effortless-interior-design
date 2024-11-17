import { Hero } from "@/components";
import HomeBio from "@/components/HomeBio/HomeBio";
import SchemeSlider from "@/components/ShemeSlider/SchemeSlider";
import OurStory from "@/components/OurStory/OurStory";
import Testimonials from "@/components/Testimonials/Testimonials";
import Resources from "@/components/Resources/Resources";

import { getPosts } from "@/utils/getPosts";
import { PostItem } from "@/utils/types";

export default async function Home() {
  const posts: PostItem[] = await getPosts();

  const postDisplayLimit = posts.slice(0, 3);

  return (
    <main>
      <Hero />
      <OurStory />
      <SchemeSlider />
      <HomeBio />
      <Testimonials />
      <Resources posts={postDisplayLimit} />
    </main>
  );
}
