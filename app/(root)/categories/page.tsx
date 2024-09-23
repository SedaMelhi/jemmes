import { CategoriesList, CustomBreadcrumb } from "@/components/categoriesPage";
import { Form, Services, Text } from "@/components/homePage";
import { Container } from "@/components/shared";
import { NextPage } from "next";

const Categories: NextPage = () => {
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
          <div className="flex gap-8">
            <CategoriesList />
          </div>
        </Container>
      </main>
      <Container className="lg:mt-40 mt-20">
        <Text
          text_orange="Услуги"
          desc="Компания предлагает ландшафтные услуги, включая проектирование, озеленение, вертикальное озеленение, уход за растениями и праздничное оформление. Также доступны  услуги по уходу за садом."
        />
      </Container>
      <Services />
      <Container className="lg:mt-40 mt-20">
        <Form />
      </Container>
    </div>
  );
};

export default Categories;
