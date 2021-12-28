export interface IUserButtonProps {
  /**
   * The function to call when the button is clicked.
   * @type {() => void}
   */
  onClick: () => void;

  // /**
  //  * The flag that states if openMenu is opened.
  //  * @type {string}
  //  *
  //  * */
  // openMenu: boolean;

  /**
   * The button aria label.
   * @type {string}
   *
   * */
  ariaLabel: string;
}
