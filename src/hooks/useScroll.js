import { useRef } from "react";

const useScroll = () => {
  const scrollRef = useRef(null);

  const scrollHandler = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollHandler, scrollRef };
};

export default useScroll;
