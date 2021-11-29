import { ReactElement } from "react";

import { ProductDetailsContainer } from "containers/Home/ProductDetailsContainer/ProductDetailsContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The page with the details of any given product.
 * @returns {ReactElement} The product details page.
 */
const ProductDetails = (): ReactElement => {
  return <ProductDetailsContainer />;
};

ProductDetails.Layout = LayoutContainer;

export default ProductDetails;
