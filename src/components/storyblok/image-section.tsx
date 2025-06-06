import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.jpg";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkTypes } from "@/types/IfLinkInterface";
import Link from "next/link";
import { Button } from "../ui/button";

export const ImageSection = ({ blok, settings }: any) => {
  return (
    <div
      {...storyblokEditable}
      className={`${blok.full_width ? "w-full" : "container-section "} ${
        blok.bg_color?.color && "pb-10 lg:p-14"
      }`}
      style={{ background: `${blok.bg_color?.color || ""}` }}
    >
      <div
        className={`grid gap-6 lg:gap-14 grid-cols-1 lg:grid-cols-2 ${
          blok.big_block ? "lg:h-[900px]" : "lg:h-[600px]"
        }`}
      >
        <div
          className={`w-full h-[350px] lg:h-full relative ${
            blok.image_right && "order-1"
          }`}
        >
          <Image
            src={blok.image.filename || placeholder}
            alt={blok.title}
            fill
            className={`${
              settings.content.border_template && "rounded-[50px]"
            } object-cover ${
              blok.image_right ? "p-0 lg:p-10 pr-0" : "p-0 lg:p-10 pl-0"
            }`}
          />
        </div>
        <div
          className={`p-2 lg:p-0 flex flex-col gap-5 lg:max-w-[80%] justify-center ${
            blok.text_white && "text-white"
          }`}
        >
          {blok.sub_title && <h3>{blok.sub_title}</h3>}
          {blok.title && <h2>{blok.title}</h2>}
          {blok.content && (
            <span className="image-content">{render(blok.content)}</span>
          )}
          <div>
            {blok.buttons.map((item: LinkTypes) => (
              <Button
                key={item._uid}
                variant={`${item.secondary_color ? "secondary" : "default"}`}
              >
                <Link className="button" href={item?.link?.cached_url}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
