import React, { FC, ReactElement } from "react";

import { Header } from "./Header/Header";

/**
 * The MainLayout component.
 * @param {any} children the children of the component
 * @returns {ReactElement} The MainLayout component
 */
export const MainLayout: FC = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
