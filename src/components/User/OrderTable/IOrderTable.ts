export interface IOrderTableProps {
  objects: IObjectProps[];
}

export interface IObjectProps {
  /**
   * The Object's name
   * @type {String}
   *
   * */
  name: string;

  /**
   * The Object's quantity bought
   * @type {String}
   *
   * */
  quantity: number;

  /**
   * The Object's price
   * @type {Number}
   *
   * */
  price: number;

  /**
   * The Object's image
   * @type {String}
   *
   * */
  image: string;
}
