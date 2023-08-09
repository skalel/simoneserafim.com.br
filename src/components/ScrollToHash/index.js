import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  let location = useLocation();

  const removeHashCharacter = (str) => {
    return str.slice(1);
  };

  const hashElement = useMemo(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
