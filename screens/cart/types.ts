export type CardFoodProps = {
  data: CardFoodData;
  navigateRouteName?: string;
  fromRestaurantMenu?: boolean;
};

export type CardFoodData = {
  logo: string;
  name: string;
  rate: number;
  foodName: string;
  foodDescription: string;
  price: number;
  image: string;
};
