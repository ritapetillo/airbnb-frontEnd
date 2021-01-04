import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  console.log(ref);
  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.className !== "SmSearchBar ml-auto"
    ) {
      console.log(e.target);
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
