export const Space = ({ blok }: any) => {
  const item = () => {
    switch (blok.range) {
      case "5":
        return "lg:pt-5 lg:pb-5";
      case "10":
        return "lg:pt-10 lg:pb-10";
      case "14":
        return "lg:pt-14 lg:pb-14";
      case "24":
        return "lg:pt-24 lg:pb-24";
      case "32":
        return "lg:pt-32 lg:pb-32";
      case "44":
        return "lg:pt-44 lg:pb-44";
      default:
        return "lg:pt-0 lg:pb-0";
    }
  };

  const m_mobile = () => {
    switch (blok.m_range) {
      case "5":
        return "pt-5 pb-5";
      case "10":
        return "pt-10 pb-10";
      case "12":
        return "pt-12 pb-12";
      case "14":
        return "pt-14 pb-14";
      case "24":
        return "pt-24 pb-24";
      case "32":
        return "pt-32 pb-32";
      case "44":
        return "pt-44 pb-44";
      default:
        return "pt-0 pb-0";
    }
  };

  return <div className={`${m_mobile()} ${item()}`} />;
};
