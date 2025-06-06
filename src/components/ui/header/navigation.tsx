"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { useParams, usePathname } from "next/navigation";
import { Socials } from "../socials/socials";
import { OpeningHours } from "../opening-hours/opening-hours";

interface HeaderProps {
  props: {
    header_bg_color: {
      color: string;
    };
    header_text_color: {
      color: string;
    };
    site_title: string;
    footer_menu: LinkTypes[];
    meny: LinkTypes[];
    logo: {
      filename: string;
    };
    transparent: boolean;
    fields: any;
  };
}

export const Navigation = ({ props }: HeaderProps) => {
  const [open, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!open);
  };

  const router = useParams();
  const path = usePathname();
  return (
    <nav
      className={`fixed w-full items-center flex justify-between top-0 px-5 lg:px-14 py-6 z-30`}
      style={{
        background: `${
          props.transparent ? "transparent" : props.header_bg_color.color
        }`,
      }}
    >
      <Link href="/">
        <Image
          src={props.logo.filename}
          alt={props.site_title}
          width={150}
          height={50}
          className={`${open ? "hidden" : "z-50 absolute -mt-5 print-hidden"}`}
        />
      </Link>

      <OpeningHours />

      <div className={`hidden lg:flex gap-4`}>
        <div>
          {props.meny.map((item: LinkTypes) => {
            return (
              <Link
                key={item._uid}
                href={`/${item?.link?.cached_url}`}
                style={{
                  color:
                    path === `/${item.link.cached_url}`
                      ? ""
                      : props.header_text_color.color,
                }}
                className={`${
                  router.slug === item.link.cached_url && "active"
                }  px-5 py-2`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <Socials props={props.fields} color={props.header_text_color} />
      </div>

      <div className="block print-hidden lg:hidden">
        <Hamburger toggled={open} toggle={setMenuOpen} />
      </div>
      <div
        className={`gap-2 fixed top-0 h-full w-full mt-20 px-10 py-14 left-0 flex-col flex text-[32px] z-50 transition-all duration-300 right-0 print-hidden ${
          !open ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ background: `${props.header_bg_color.color}` }}
      >
        {props.meny.map((item: LinkTypes) => (
          <Link
            onClick={handleOpenMenu}
            key={item._uid}
            href={`/${item?.link?.cached_url}`}
            style={{ color: props.header_text_color.color }}
          >
            {item.title}
          </Link>
        ))}
        <div className="pt-10">
          <Socials props={props.fields} color={props.header_text_color} />
        </div>
      </div>
    </nav>
  );
};
