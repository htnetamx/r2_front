import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductGridSection } from "components/common/Sections";
import { addItem } from "dataflows/Basket/BasketSlice";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { selectAllCategories, selectSelectedCategory } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectCategoryProducts,
  selectIsLoadingCategoryProducts,
} from "dataflows/Product/ProductSelectors";
import { getCategoryProducts } from "dataflows/Product/ProductThunks";

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

  /**
   * Action to add product to cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const addToCart = (product: IProduct): void => {
    //TODO: implement add to cart
    const item: IBasketItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      pictureUrl: product.seoFilename,
    };

    dispatch(addItem(item));
  };

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <Container maxW="container.xl">
      <ProductGridSection
        title={category?.name || ""}
        products={categoryProducts}
        addToCart={addToCart}
        onProductClick={onProductClick}
      />
    </Container>
  );
};
