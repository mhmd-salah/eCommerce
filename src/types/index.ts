//----------------| redux types
export type TLoading = "idle" | "pending" | "success" | "failed";

//----------------| categories types
export type TCategory = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};

//----------------| products types
export type TProduct = {
  id: number;
  title: string;
  cat_prefix: string;
  img: string;
  price: string;
};
