import { useState } from "react";
import { useEffect } from "react";

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWidth(width);
      switch (true) {
        case width < 800:
          setIsMobile(true);
          setIsTablet(false);
          setIsDesktop(false);
          break;
        case width >= 800 && width < 1200:
          setIsMobile(false);
          setIsTablet(true);
          setIsDesktop(false);
          break;
        default:
          setIsMobile(false);
          setIsTablet(false);
          setIsDesktop(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop, width };
};
