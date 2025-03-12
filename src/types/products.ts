export interface SubProductDetailType {
  id: string;
  name: string;
  description: string;
  link?: string;
  category: string;
  subCategory?: string;
  image?: string;
}

export interface ProductDetailType {
  id: string;
  name: string;
  description: string;
}

export type ProductCategoryType = "all" | "stack" | "integration";
