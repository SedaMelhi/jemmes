import { Container } from "../shared";
import { Text } from "../homePage";
import {
  CategoriesService,
  CategoryType,
  SubcategoryType,
} from "@/services/homePage";
import { FC } from "react";
import { CategoriesListMob } from "./categoriesListMob";
import { CategoriesListPC } from "./categoriesListPC";

export type AllCategoriesType = {
  id: number;
  name: string;
  icon: string;
  main: boolean;
  image: string;
  subcategories: SubcategoryType[] | null;
};

export const CategoriesList: FC<{
  categories: CategoryType[];
  activeSubcat: number;
}> = async ({ categories, activeSubcat }) => {
  const getSubcategories = async (
    id: number,
    arr: AllCategoriesType[],
    i: number
  ) => {
    const data: SubcategoryType[] | null =
      await CategoriesService.getSubcategories(id);
    arr.push({ ...categories[i], subcategories: data });
    if (categories.length - 1 > i) {
      return getSubcategories(categories[i + 1].id, arr, i + 1);
    }
    return arr;
  };

  const allCategories: AllCategoriesType[] | [] = categories[0]
    ? await getSubcategories(categories[0].id, [], 0)
    : [];

  return (
    <div className="lg:w-[373px]">
      <Container className="mt-0">
        <CategoriesListMob allCategories={allCategories} />
        <Text
          text_orange="Категории товаров"
          className="mb-10 pt-0 lg:block hidden"
        />
        <CategoriesListPC
          allCategories={allCategories}
          activeSubcat={activeSubcat}
        />
      </Container>
    </div>
  );
};
