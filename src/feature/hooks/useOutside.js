import { useEffect, useRef } from "react";

export function useOutside(handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleOutside, true);

      return () => document.removeEventListener("click", handleOutside, true);
    },
    [handler],
  );

  return ref;
}
