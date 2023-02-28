export class Restaurant {
  _id: string;
  name: string;
  number: string;
  address: string;
  workingHours: string;
  deliveryNumber: string;
  photo: string;
  categories: {
    [key: string]: string[];
  };
}
