export type TProduct = {
  id: number;
  title: string;
  cat_prefix?: string;
  img: string;
  max: number;
  price: number;
  isLiked?: boolean;
  quantity?: number;
};
