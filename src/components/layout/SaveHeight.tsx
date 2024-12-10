import { useEffect } from "react";

// Sets --save-height CSS variable based on window.innerHeight.
// This helps handle screen size changes, such as when scrolling on an Iphone.
// Alternatively, consider using safe-area-inset-top and safe-area-inset-bottom for more precise handling.
export const useSaveHeight = () => {
  useEffect(() => {
    const setSaveHeight = () => {
      document.documentElement.style.setProperty('--save-height', `${window.innerHeight - 0.5}px`);
    };

    setSaveHeight();
    window.addEventListener('resize', setSaveHeight);

    return () => {
      window.removeEventListener('resize', setSaveHeight);
    };
  }, []);
};
