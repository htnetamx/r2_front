/**
 * Used for form components where the key can be a number, string, etc...,
 * @interface
 */
export interface IDisplayable<T> {
  key: T;
  text: string;
}
