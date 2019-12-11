import { useEffect, useState } from "react";
import { throttle } from "lodash";

function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0); // Do you see how we left that first useState argument blank? We won’t actually be using that value because we will be grabbing the scrollTop directly
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({
      previousScrollTop,
      currentScrollTop
    }); //we will pass our function a callback so that it can return the scroll data back to the <Header / >.
  }

  //wrap handleDocumentScroll() inside of a throttle function so that it will fire at most every 250ms
  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  //useEffect hook has two purposes: 1) Register the scroll event listener on <Header /> mount, and 2) Remove the event listener on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);
  //the last remaining empty array argument ensures that our useEffect hook only runs one time on mount (we only want to register the scroll listener once). useEffect will run after every single render unless you provide this last array argument. It is also possible to call it conditionally by passing the array some parameters
}

export default useDocumentScrollThrottled;
