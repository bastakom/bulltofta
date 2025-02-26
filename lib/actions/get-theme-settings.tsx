import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getThemeSettings() {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/theme-settings`, sbParams, {
    cache: "force-cache",
  });

  return data.data.story;
}
