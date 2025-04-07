import React from "react";

export const PrintButton = ({ blok }: any) => {
  function handlePrint() {
    window.print();
  }
  return (
    <>
      <div className="max-w-[95%] justify-end mx-auto flex gap-5 items-center pb-5">
        <button
          onClick={handlePrint}
          className="print-hidden active fixed bottom-5 right-5 px-5 py-2 hover:bg-[#ffef00] hover:text-black text-[20px] z-20"
        >
          {blok.title}
        </button>
      </div>
    </>
  );
};
