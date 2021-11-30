import { ReactElement } from "react";

import { ProductDetailsContainer } from "containers/Home/ProductDetailsContainer/ProductDetailsContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { useRouter } from "next/router";

/**
 * The page with the details of any given product.
 * @returns {ReactElement} The product details page.
 */
const ProductDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <ProductDetailsContainer productId={slug as string} />;
};

ProductDetails.Layout = LayoutContainer;

export default ProductDetails;
