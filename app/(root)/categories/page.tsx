import {
  CategoriesList,
  CategoryCards,
  CustomBreadcrumb,
} from "@/components/categoriesPage";
import { Container, FormAndServices } from "@/components/shared";
import { CategoriesService, CategoryType } from "@/services/homePage";
import { NextPage } from "next";

const Categories: NextPage = async () => {
  const categories: CategoryType[] = await CategoriesService.getCategories();
  return (
    <div>
      <main>
        <Container className="lg:mt-10 sm:mt-6 sm:block hidden" border="none">
          <CustomBreadcrumb
            items={[
              { id: 0, name: "Главная", link: "/" },
              { id: 1, name: "Каталог", link: "/categories" },
            ]}
          />
        </Container>
        <div className="lg:flex gap-8 lg:mt-10 sm:mt-6 mt-4 max-w-[1559px] m-auto lg:px-5">
          <CategoriesList categories={categories} activeSubcat={0} />
          <CategoryCards categories={categories} />
        </div>
      </main>
      <FormAndServices />
    </div>
  );
};

export default Categories;
