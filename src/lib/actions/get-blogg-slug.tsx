import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getBloggSlug(slug: string) {
  let sbParams = {
    version: "published" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/blogg/${slug}`, sbParams);

  return data.data.story;
}
