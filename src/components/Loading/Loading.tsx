import React, { useEffect, useState } from "react";

import { ILoadingProps } from "./ILoadingProps";

/**
 * The Loading logo.
 * @param {ILoadingProps} props - The properties passed to the component.
 * @returns {React.ReactElement} The React element representing the Loading.
 **/
export const Loading = (props: ILoadingProps): React.ReactElement | null => {
  const { delay = 250 } = props;
  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [delay]);

  // TODO: Create the Loading component.
  return null;
};
