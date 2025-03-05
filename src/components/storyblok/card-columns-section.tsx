"use client";

import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/images/placeholder.jpg";
import { render } from "storyblok-rich-text-react-renderer";

export const CardColumns = ({ blok, settings }: any) => {
  return (
    <div className="container-section mx-auto mt-4 lg:my-14">
      <div
        className={`grid xl:max-w-[80%] mx-auto gap-10 py-6 ${
          blok.columns === "4"
            ? "lg:grid-cols-4"
            : blok.columns === "3"
            ? "lg:grid-cols-3"
            : blok.columns === "2"
            ? "lg:grid-cols-2"
            : "lg:grid-cols-1"
        }`}
      >
        {blok.fields.map((item: any) =>
          item?.link?.cached_url ? (
            <Link
              href={item?.link?.cached_url || ""}
              key={item._uid}
              className={`${
                blok.columns === "1"
                  ? "flex flex-col gap-14 lg:gap-14 lg:flex-row-reverse items-center"
                  : "flex flex-col gap-14"
              } border p-5 lg:p-14
      transition-all duration-300 ${
        item?.link?.cached_url && "hover:shadow-lg"
      } `}
            >
              {item.image.filename && (
                <div className="w-full h-[300px] relative">
                  <Image
                    src={item.image.filename || placeholder}
                    fill
                    alt={item.title}
                    className={`${
                      settings.content.border_template && "rounded-lg"
                    } object-cover`}
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{item.title}</h3>
                <span
                  className={`flex flex-col gap-5 ${
                    blok.columns === "1" && "lg:max-w-[80%]"
                  }`}
                >
                  {/* change to: */}
                  {render(item.content)}
                </span>
              </div>
            </Link>
          ) : (
            <div
              key={item._uid}
              className={`${
                blok.columns === "1"
                  ? "flex flex-col gap-14 lg:gap-5 lg:flex-row-reverse items-center"
                  : "flex flex-col gap-14"
              } gap-5 border p-5
      lg:p-14 transition-all duration-300 ${
        item?.link?.cached_url && "hover:shadow-lg"
      } `}
            >
              {item.image.filename && (
                <div className="w-full h-[300px] relative">
                  <Image
                    src={item.image.filename || placeholder}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{item.title}</h3>
                <span
                  className={`flex flex-col gap-5 ${
                    blok.columns === "1" && "lg:max-w-[80%]"
                  }`}
                >
                  {/* change to: */}
                  {render(item.content)}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
