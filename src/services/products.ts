import api from "@api";
import type { TProduct } from "@customTypes";

const fetchProductsByIds = (ids: string[]) => {
  const query = ids.map((el) => `id=${el}`).join("&");
  return api.get<TProduct[]>(`/products?${query}`);
};

export default fetchProductsByIds;
