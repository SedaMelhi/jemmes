import axios from "axios";
import { API_URL } from "..";

export type ExampleType = { id: number; url: string };

export type CategoryType = {
  id: number;
  name: string;
  icon: string;
  main: boolean;
  image: string;
};

export type ProductType = {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
};

export type BannerType = {
  id: number;
  url: string;
};

export type ReviewType = {
  id: number;
  name: string;
  image: string;
  text: string;
};
type ServicesType = {
  id: number;
  title: string;
  image: string;
  text: string;
};
axios.defaults.baseURL = API_URL;

export const ExamplesService = {
  async getExamples(): Promise<ExampleType[] | null> {
    try {
      const { data } = await axios.get("/examples");
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export const CategoriesService = {
  async getCategories(main?: boolean): Promise<CategoryType[]> {
    try {
      const params = main !== undefined ? { main } : {};
      const { data } = await axios.get("/categories", { params });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export const ProductsService = {
  async getProducts(
    activeFilter: { [key: string]: boolean },
    limit?: number
  ): Promise<ProductType[] | null> {
    const params = limit ? { ...activeFilter, limit } : activeFilter;
    try {
      const { data } = await axios.get("/products", { params });
      return data.data;
    } catch (error) {
      return null;
    }
  },
};

export const BannerService = {
  async getBanner(): Promise<BannerType[] | null> {
    try {
      const { data } = await axios.get("/banner");
      return data;
    } catch (error) {
      return null;
    }
  },
};

export const ReviewsService = {
  async getReviews(): Promise<ReviewType[] | null> {
    try {
      const { data } = await axios.get("/reviews");
      return data;
    } catch (error) {
      return null;
    }
  },
};

export const ServicesService = {
  async getServices(): Promise<ServicesType[] | null> {
    try {
      const { data } = await axios.get("/services");
      return data;
    } catch (error) {
      return null;
    }
  },
};
