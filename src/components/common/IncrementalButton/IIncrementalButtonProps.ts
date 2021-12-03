export interface IIncrementalButtonProps {
  /**
   * The minimum value of the button.
   * @type {number}
   **/
  min?: number;

  /**
   * The maximum value of the button.
   * @type {number}
   */
  max?: number;

  /**
   * The current value of the button.
   * @type {number}
   **/
  defaultValue?: number;

  width?: number;

  /**
   * Action to be performed when the button add is clicked.
   * @type {() => void}
   */
  onAdd: () => void;

  /**
   * Action to be performed when the button subtract is clicked.
   * @type {() => void}
   */
  onSubtract: () => void;
}
