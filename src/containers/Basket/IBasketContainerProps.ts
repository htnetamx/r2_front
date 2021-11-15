export interface IBasketContainerProps {
  /**
   * Determine if the basket is open
   * @default false
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * Action to close the basket
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * Ref to the basket button
   * @type {React.RefObject<HTMLButtonElement>}
   */
  btnRef: React.RefObject<HTMLButtonElement>;
}
