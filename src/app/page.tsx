import { Hero } from "@/components";
import HomeBio from "@/components/HomeBio/HomeBio";
import SchemeSlider from "@/components/ShemeSlider/SchemeSlider";
import OurStory from "@/components/OurStory/OurStory";
import Testimonials from "@/components/Testimonials/Testimonials";
import Resources from "@/components/Resources/Resources";

import { getPosts } from "@/utils/getPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Hero />
      <OurStory />
      <SchemeSlider />
      <HomeBio />
      <Testimonials />
      {posts.length > 0 ? (
        <Resources posts={posts} />
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}
