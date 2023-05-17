export interface TMenu {
  _id: string;
  name: string;

  categories: TMenuCategory[];

  restaurantId: string;
}

export interface TMenuCategory {
  name: string;
  dishes: TDish[];
}

export interface TDish {
  _id: string;

  name: string;

  price: number;

  description: string;

  weight: string;

  photo: string;
}
