export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  images?: string[];
  category_id: number;
  category_name?: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type OrderPayload = {
  customer_name: string;
  phone: string;
  address: string;
  items: Array<{ name: string; quantity: number; price: number; subtotal: number }>;
  total: number;
};
