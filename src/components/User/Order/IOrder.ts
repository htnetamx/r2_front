export interface IOrderProps {
  customerName: string;
  telephone: string;
  orderId: string;
  total: number;
  items: IItem[];
}

export interface IItem {
  name: string;
  quantity: number;
  price: number;
}
