import { DialogTypeEnum } from "./DialogTypeEnum";

export interface IDialogProps {
  /**
   * The dialog title.
   * @field
   * @type {string}
   **/
  title?: string;

  /**
   * The dialog content.
   * @field
   * @type {string}
   **/
  content: string;

  /**
   * The dialog buttons.
   * @field
   * @type {() => void}
   **/
  primaryAction?: () => void;

  /**
   * Indicates if the modal is open
   * @field
   * @type {boolean}
   **/
  isOpen: boolean;

  /**
   * The dialog close action
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * The dialog type.
   * @field
   * @type {DialogTypeEnum}
   **/
  dialogType: DialogTypeEnum;
}
