export interface SubProductDetailType {
  id: string;
  name: string;
  description: string;
  link?: string;
  category: string;
  subCategories?: {name: string, bg?: string, color?: string}[];
  image?: string;
}

export interface IntegrationDetailType {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  subCategory: string;
}

export interface ProductDetailType {
  id: string;
  name: string;
  description: string;
}

export type ProductCategoryType = "all" | "stack" | "integration";
