"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { Socials } from "../socials/socials";

export const FooterSection = ({ props }: any) => {
  return (
    <footer
      className={`mx-auto text-center text-black lg:text-left pb-20 lg:pb-44 pt-14 relative print-hidden ${
        props.footer_full_width ? "w-full" : "container-section"
      }`}
      style={{ background: `${props.bg_footer?.color}` }}
    >
      <div className="grid lg:grid-cols-4 justify-center w-full container-section lg:pt-14">
        <div className="relative flex justify-center lg:justify-start w-[250px] h-[250px] ">
          <Image
            src={props.footer_logo.filename || props.logo.filename}
            alt={props.site_title}
            fill
            className="lg:-mt-4 object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 mt-10 lg:mt-0">
          <h3>{props.contact_title}</h3>
          <span className="render-content">{render(props.adress)}</span>
          <div className="flex flex-col">
            <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
            <Link href={`tel:${props.phone}`}>{props.phone}</Link>
            <div className="flex mt-5 items-center justify-center lg:justify-start">
              <Socials props={props.fields} color={props.header_text_color} />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 lg:mt-0">
          {props.footer_menu.map((item: LinkTypes) => (
            <Link key={item._uid} href={item.link.cached_url}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-5 justify-center pt-14 lg:pt-0 lg:absolute right-14 bottom-5">
        <Link href="/cookies">Cookies</Link>
        <Link href={props.link.cached_url}>{props.link_title}</Link>
      </div>
    </footer>
  );
};
