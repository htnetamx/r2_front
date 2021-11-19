import { ReactElement } from "react";

import { Img } from "@chakra-ui/image";

import { ICategorySectionProps } from "./ICategorySectionProps";

/**
 * The category section component
 * @param {ICategorySectionProps} props the component props.
 * @returns {ReactElement} The component
 */
export const CategorySection = (props: ICategorySectionProps): ReactElement => {
  const { categories, onCategoryClick } = props;

  const categoryElements = categories.map((category) => {
    <Img></Img>;
  });

  return (
    <div className="category-section">
      <div className="category-section__container">
        {categories.map((category) => {
          return <></>;
        })}
      </div>
    </div>
  );
};
