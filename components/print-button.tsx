import React from "react";

export const PrintButton = ({ blok }: any) => {
  function handlePrint() {
    window.print();
  }
  return (
    <div className="max-w-[95%] mx-auto flex justify-end pb-10">
      <button
        onClick={handlePrint}
        className="print-hidden active  px-5 py-2 hover:bg-[#ffef00] hover:text-black text-[20px]"
      >
        {blok.title}
      </button>
    </div>
  );
};
