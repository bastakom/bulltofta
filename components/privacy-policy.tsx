import { render } from "storyblok-rich-text-react-renderer";

export const PrivacyPolicy = ({ blok }: any) => {
  return (
    <div className="w-[95%] mx-auto py-14 pt-32 px-2 lg:px-0">
      <h2 className="mb-4">{blok.title}</h2>
      <div>{render(blok.content)}</div>
    </div>
  );
};
