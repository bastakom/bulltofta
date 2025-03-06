import type { Metadata } from "next";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "@/components/ui/header/header";
import "./globals.scss";
import "./font.css";
import "./theme.scss";
import "./fonts.scss";
import { Footer } from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Bulltofta kött",
  description:
    "Välkommen till Bulltofta Kött på Kattarpstorget Jägersrovägen 16! Vi är är en butik som har stort utbud på framförallt ox- och fläskkött. Vi som jobbar här har massor med erfarenhet och kunskaper när det gäller att få till en riktigt god middag!",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
