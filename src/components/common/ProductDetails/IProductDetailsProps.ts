import { IProductBoxProps } from "../ProductBox";

export interface IProductDetailsProps extends IProductBoxProps {
  /**
   * The product full description
   * @type {string}
   **/
  productFullDescription: string;
}
