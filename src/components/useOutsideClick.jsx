import { useEffect } from "react";

const useOutsideClick = (reff, callback) => {
  console.log(reff)
  const handleClick = e => {

    if (reff.current && !reff.current.contains(e.target) 
    && e.target.className !== 'SmSearchBar ml-auto') {
      console.log('sd')

      console.log(e.target.className)
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