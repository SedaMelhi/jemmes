import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Text } from "../homePage";
import { FC } from "react";
import { Close } from "../svg";
import Link from "next/link";
import { Container } from "../shared";
import { AllCategoriesType } from "./categoriesList";

export const CategoriesListMob: FC<{ allCategories: AllCategoriesType[] }> = ({
  allCategories,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full lg:hidden block">
      <AccordionItem value="item-category" className="border-none">
        <AccordionTrigger className="p-0 hover:no-underline mb-8 mt-2.5">
          <Text
            text_orange="Категории товаров"
            className="pt-0 lg:hidden block [&+svg]:scale-150"
          />
        </AccordionTrigger>
        <Container border="none">
          <AccordionContent className="pl-4">
            <Accordion type="single" collapsible className="w-full border-none">
              {allCategories.map(({ name, id, subcategories }, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={id}
                  className="border-none"
                >
                  <AccordionTrigger className="text-2xl font-medium tracking-[-0.48px] text-secondary mb-7 [&[data-state=open]>svg]:rotate-45 hover:no-underline p-0 [&[data-state=open]]:text-primary [&[data-state=open]>svg>path]:stroke-accent ">
                    <div className="leading-6">{name}</div>
                    <Close className="w-auto h-auto transition-all duration-200 [&+svg]:hidden" />
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    {subcategories &&
                      subcategories.map(({ id, name }) => (
                        <Link
                          href={`/categories/${id}`}
                          key={id}
                          className="block text-secondary text-xl hover:text-accent duration-200 transition-colors mb-5"
                        >
                          {name}
                        </Link>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </Container>
      </AccordionItem>
    </Accordion>
  );
};
