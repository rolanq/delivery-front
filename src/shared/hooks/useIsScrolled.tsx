import { useEffect, useMemo, useState } from "react";

export const useIsScrolled = (
  position?: number,
  initialValue: boolean = true
) => {
  const [lastPosition, setLastPosition] = useState(position ?? 0);
  const [show, setShow] = useState(initialValue);

  useEffect(() => {
    const content = document.getElementById("scrollable_content");

    const handleScroll = () => {
      let scrolling = content?.scrollTop ?? 0;

      if (scrolling > lastPosition) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (!position) {
        setLastPosition(scrolling);
      }
    };

    content?.addEventListener("scroll", handleScroll);
    return () => {
      content?.removeEventListener("scroll", handleScroll);
    };
  }, [lastPosition]);

  return useMemo(() => show, [show]);
};
