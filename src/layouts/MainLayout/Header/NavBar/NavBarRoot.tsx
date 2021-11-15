import { useEffect, useState, FC, ReactElement } from "react";

import throttle from "lodash.throttle";

/**
 * This is the root component of the NavBar.
 * @param {ReactNode} children The children of the NavBar.
 * @returns {ReactElement} The root component of the NavBar.
 */
export const NavBarRoot: FC = ({ children }): ReactElement => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return <div>{children}</div>;
};
