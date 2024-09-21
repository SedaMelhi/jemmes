import { CategoriesService, CategoryType } from "@/services/homePage";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Categories: FC = async () => {
  const categories: CategoryType[] = await CategoriesService.getCategories();
  return (
    <section className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-x-2.5 sm:gap-4 gap-1  justify-between sm:mt-2.5 mt-8 lg:flex-nowrap flex-wrap">
      {categories.map(
        ({ id, name, icon, main }) =>
          main && (
            <Link
              href={`/catalog/${id}`}
              key={id}
              className="col-span-1 group  h-32 border border-light-grey rounded-2xl text-xl hover:bg-primary hover:text-white-100 transition-colors duration-200"
            >
              <div className="h-full flex lg:justify-center justify-start items-center xl:gap-4 lg:gap-2 gap-4 xl:flex-row lg:flex-col sm:w-[190px] w-[240px] m-auto">
                <div className="border border-accent rounded-full p-4 group-hover:border-white-100 group-hover:bg-white-100 transition-colors duration-200 w-16 h-16 flex-shrink-0">
                  <Image
                    src={icon || "icon.svg"}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 height-auto"
                  />
                </div>
                {name}
              </div>
            </Link>
          )
      )}
      <Link
        href={"/categories"}
        className="flex justify-center items-center shrink-0 bg-accent rounded-2xl text-white-100 lg:h-32 h-[52px] text-xl hover:bg-primary transition-colors duration-200 lg:col-span-1 sm:col-span-2 col-span-1 lg:mt-0 mt-4"
      >
        Полный каталог
      </Link>
    </section>
  );
};
