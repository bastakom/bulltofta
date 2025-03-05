import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

export const OpeningHours = () => {
  const openingHours = {
    monday: [{ start: "07:30", end: "18:00" }],
    tuesday: [{ start: "07:30", end: "18:00" }],
    wednesday: [{ start: "07:30", end: "18:00" }],
    thursday: [{ start: "07:30", end: "18:00" }],
    friday: [{ start: "06:00", end: "18:00" }],
    saturday: [{ start: "10:00", end: "14:00" }],
    sunday: [],
  };

  function isOpenNow(openingHours: any) {
    const now = new Date();
    const currentDay = now
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    const currentTime = now.toTimeString().slice(0, 5);

    const todaysHours = openingHours[currentDay];

    if (!todaysHours || todaysHours.length === 0) {
      return false;
    }

    return todaysHours.some(
      ({ start, end }: any) => currentTime >= start && currentTime <= end
    );
  }

  const status = isOpenNow(openingHours) ? "Öppet" : "Stängt";
  const openDot = isOpenNow(openingHours) ? (
    <FaRegDotCircle color="#008000" />
  ) : (
    <FaRegDotCircle color="#FF0000" />
  );

  return (
    <div className="hidden lg:flex items-center gap-2 lg:absolute lg:left-[270px]">
      {openDot}
      {status}
    </div>
  );
};
