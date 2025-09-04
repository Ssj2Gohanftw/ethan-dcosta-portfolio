import { useState, useEffect } from "react";

const useDesktop = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined to avoid issues during server-side rendering (SSR)
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches); // Set initial match state

    const handler = (event) => setMatches(event.matches);

    // Add listener for changes
    mediaQuery.addEventListener("change", handler);

    // Clean up the event listener
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]); // Re-run effect if the query string changes

  return matches;
};

export default useDesktop;
