import React, { ReactElement } from "react";

import { ProductDetails } from "components/common/ProductDetails/ProductDetails";

import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

const fakeProps = {
  id: "1",
  productName: "TAURUS GAUDÍ Licuadora Vaso de Vidrio de 1.5 Litros, 500 W.",
  productImages: [
    "https://falabella.scene7.com/is/image/Falabella/880793173_1?wid=800&hei=800&qlt=70",
  ],
  productPrice: "480",
  productOldPrice: "560",
  productDescription:
    "Especificaciones del producto, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'",
};

/**
 * The product details container.
 * @returns {ReactElement} The product details container.
 */

export const ProductDetailsContainer = (): ReactElement => {
  const productImagesCollection = () => {
    fakeProps.productIImages.map((image, index) => {
      return <Image src={image} alt="product" />;
    });
  };

  return (
    <Box>
      <ProductDetails
        id={fakeProps.id}
        productName={fakeProps.productName}
        productImages={fakeProps.productImages}
        productPrice={fakeProps.productPrice}
        productOldPrice={fakeProps.productOldPrice}
        productDescription={fakeProps.productDescription}
      />
    </Box>
  );
};
