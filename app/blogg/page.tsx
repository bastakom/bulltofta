import { Card } from "@/components/ui/blogg/card";
import { CardWrapper } from "@/components/ui/blogg/card-wrapper";
import { getBlogg } from "@/lib/actions/get-blogg";
import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

const page = async () => {
  const data = await getBlogg();
  return (
    <div className="container-section pt-32 pb-10 lg:py-44 ">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-4">
        {data.map((item: any, i: number) => {
          return (
            <div key={i}>
              <Card
                title={item.name}
                uuid={i}
                link={item.full_slug}
                content={item.content.content}
                image={item.content?.image?.filename}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
