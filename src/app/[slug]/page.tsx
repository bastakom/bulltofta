import { getData } from "@/lib/actions/get-data";
import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;
const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);

  const settings = await getThemeSettings();

  return <StoryblokStory story={story} settings={settings} />;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug || "home";
  const slugName = pathname;

  const data = await getData(slugName);

  if (!data) {
    return {
      title: "Bulltofta kött",
      description: "Default description",
    };
  }

  return {
    title: data?.content?.seo?.title || "Bulltofta kött",
    description: data?.content?.seo?.description || "Default description",
  };
};

export default Page;
