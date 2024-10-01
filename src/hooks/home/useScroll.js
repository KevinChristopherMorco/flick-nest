import { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const scrollRef = useRef(null);
  let [scroll, setScroll] = useState(0);
  const [isVisible, setIsVisible] = useState({
    descVisibility: true,
    ascVisibility: true,
  });

  const { descVisibility, ascVisibility } = isVisible;

  const handleScroll = (event) => {
    const { id } = event.target;
    setScroll(scrollRef.current.scrollLeft);

    if (id === "scrollToLeft") {
      if (scroll === 0) return;
      setScroll((prev) => {
        return (scrollRef.current.scrollLeft = prev - 400);
      });
    }

    if (id === "scrollToRight") {
      if (scroll >= scrollRef.current.scrollWidth) return;
      setScroll((prev) => {
        return (scrollRef.current.scrollLeft = prev + 400);
      });
    }
  };

  useEffect(() => {
    setIsVisible((prev) => {
      if (scroll === 0) {
        return {
          descVisibility: false,
          ascVisibility: true,
        };
      }

      if (scroll >= scrollRef.current.scrollWidth) {
        return {
          descVisibility: true,
          ascVisibility: false,
        };
      }

      return {
        descVisibility: true,
        ascVisibility: true,
      };
    });
  }, [scroll]);

  return { scrollRef, ascVisibility, handleScroll };
};

export default useScroll;
