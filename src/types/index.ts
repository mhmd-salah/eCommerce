//----------------| redux types
export type TLoading = "idle" | "pending" | "success" | "failed";

//----------------| categories types
export type TCategory = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};
