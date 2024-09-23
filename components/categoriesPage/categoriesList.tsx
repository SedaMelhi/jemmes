import { CategoriesService, CategoryType } from "@/services/homePage";
import { Container } from "../shared";
import { Text } from "../homePage";

export const CategoriesList = async () => {
  const categories: CategoryType[] = await CategoriesService.getCategories();
  return (
    <div className="w-[373px]">
      <Container className="mt-10">
        <Text text_orange="Категории товаров" className="mb-10 pt-0" />
        <ul>
          {categories.map(({ name, id }) => (
            <li
              key={id}
              className="text-2xl font-medium tracking-[-0.48px] text-secondary mb-4"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
