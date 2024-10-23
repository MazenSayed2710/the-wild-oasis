import React from "react";

function StatsticBox({ children, text, num, color }) {
  return (
    <div className="flex items-center gap-3 rounded-md  bg-gray-50 p-3 dark:bg-gray-800">
      <div
        className={`rounded-full  p-4 text-3xl `}
        style={{ color: color.text, backgroundColor: color.bg }}
      >
        {children}
      </div>
      <div>
        <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
          {text}
        </p>
        <span className="text-2xl font-semibold text-gray-600 dark:text-gray-100">
          {num}
        </span>
      </div>
    </div>
  );
}

export default StatsticBox;
