import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { selectAllCategories, selectSelectedCategory } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectCategoryProducts,
  selectIsLoadingCategoryProducts,
} from "dataflows/Product/ProductSelectors";
import { getCategoryProducts } from "dataflows/Product/ProductThunks";
import { useBasket } from "hooks/basketHooks";

import { Box, Container } from "@chakra-ui/react";

import { ICategoryContainerProps } from "./ICategoryContainerProps";

/**
 * The CategoryContainer component.
 * @param {ICategoryContainerProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const CategoryContainer = (props: ICategoryContainerProps): ReactElement => {
  const { categoryId } = props;
  const category = useSelector(selectSelectedCategory);
  const categories = useSelector(selectAllCategories);
  const categoryProducts = useSelector(selectCategoryProducts);
  const isLoading = useSelector(selectIsLoadingCategoryProducts);
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId) {
      dispatch(getCategoryProducts(categoryId));
    }
    if (!category) {
      dispatch(getCategories);
    }
  }, [categoryId]);

  useEffect(() => {
    if (categories && categoryId) {
      dispatch(selectCategory(categoryId));
    }
  }, [categories]);

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    //TODO: implement product navigation
    alert(`Product ${product.name} clicked`);
  };

  const productElements = categoryProducts.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        onProductClick={onProductClick}
        addToCart={addToBasket}
        removeFromCart={removeFromBasket}
        qtyOnBasket={getQtyInBasket(product)}
      />
    );
  });

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <Container maxW="container.xl">
      <GridSection title={category?.name || ""} elements={productElements} />
    </Container>
  );
};
