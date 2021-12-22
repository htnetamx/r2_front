export interface IUserButtonProps {
  /**
   * The function to call when the button is clicked.
   * @type {() => void}
   */
  onClick: () => void;
  /**
   * The button aria label.
   * @type {string}
   *
   * */
  ariaLabel: string;
}
