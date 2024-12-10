import { useEffect } from 'react';

// prevent the root document from being scrollable, for example when a dialog is open
export default function usePreventBodyscroll() {
  let scrollTop: number
  return useEffect(() => {
    scrollTop = document.documentElement.scrollTop;
    document.documentElement.classList.add('tw-fixed');
    document.documentElement.style.marginTop = `${-scrollTop}px`;
    document.documentElement.classList.add('tw-fixed');
    document.documentElement.classList.add('tw-overflow-scroll');

    return () => {
      document.documentElement.classList.remove('tw-fixed');
      document.documentElement.classList.remove('tw-overflow-scroll');
      document.documentElement.style.marginTop = '';
      document.documentElement.scrollTop = scrollTop;
    }
  }, [])
}
