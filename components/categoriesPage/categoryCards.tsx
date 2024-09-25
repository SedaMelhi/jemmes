import { CategoryType } from "@/services/homePage";
import Link from "next/link";
import { FC } from "react";

export const CategoryCards: FC<{ categories: CategoryType[] }> = ({
  categories,
}) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-2.5 w-full lg:px-0 px-4">
      {categories.map(({ id, name, image }) => (
        <Link href={`categories/${id}`} key={id} className="w-full">
          <div
            style={{
              background: `url(${image || "not.png"}) center/cover no-repeat`,
            }}
            className="pb-[140%] sm:min-h-[450px] min-h-[229px] rounded-2xl bg-secondary"
          ></div>
          <h3 className="mt-3 font-medium text-xl">{name}</h3>
        </Link>
      ))}
    </div>
  );
};
