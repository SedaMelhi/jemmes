import { FC } from "react";
import { AllCategoriesType } from "./categoriesList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Close } from "@/components/svg";

export const CategoriesListPC: FC<{
  allCategories: AllCategoriesType[];
  activeSubcat: number;
}> = ({ allCategories, activeSubcat }) => {
  const activeCategoryId: number = allCategories.filter(
    ({ subcategories }) =>
      subcategories && subcategories.some(({ id }) => id === activeSubcat)
  )[0]?.id;
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:block hidden"
      defaultValue={`item-${activeCategoryId}`}
    >
      {allCategories.map(({ name, id, subcategories }) => (
        <AccordionItem value={`item-${id}`} key={id} className="border-none">
          <AccordionTrigger className="text-2xl font-medium tracking-[-0.48px] text-secondary mb-7 [&[data-state=open]>svg]:rotate-45 hover:no-underline p-0 [&[data-state=open]]:text-primary [&[data-state=open]>svg>path]:stroke-accent">
            <div className="leading-6">{name}</div>
            <Close className="w-auto h-auto transition-all duration-200 [&+svg]:hidden" />
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            {subcategories &&
              subcategories.map(({ id, name }) => (
                <Link
                  href={`/categories/${id}`}
                  key={id}
                  className={`block text-xl hover:text-accent duration-200 transition-colors mb-5 ${
                    id === activeSubcat ? "text-accent" : "text-secondary"
                  }`}
                >
                  {name}
                </Link>
              ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
