import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CollapsibleSection({topbar, ptext}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      {/* Header with rotating arrow */}
      <div
        className="flex justify-between items-center mt-6 text-2xl border-b-2 border-green-300 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="mb-2">{topbar}</h2>
        <FaArrowRight
          className={`
            transform transition-transform duration-300 ease-linear
            ${open ? "rotate-90" : ""}
          `}
        />
      </div>

      {/* Paragraph with smooth slide down */}
      <div
        className={`
          transition-all duration-400 linear overflow-hidden
          ${open ? "max-h-[500px] mt-3" : "max-h-0 "}
        `}
      >
        <p className="text-amber-50">
          Improved customer reach in digital marketing refers to expanding the scope and impact of your marketing efforts to connect with a wider audience and attract potential customers. It involves implementing strategies and tactics that allow you to reach and engage with more people who may be interested in your products or services.
        </p>
      </div>
    </div>
  );
}