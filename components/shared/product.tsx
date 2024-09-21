import { FC } from "react";
import { MyButton } from "./button";
import { ProductType } from "@/services/homePage";
import { ProductCount } from "./productCount";

export const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="w-full">
      <div
        className="sm:h-[520px] h-[240px] bg-cover bg-no-repeat bg-center rounded-2xl"
        style={{ backgroundImage: `url(${product.image || "/no.png"})` }}
      ></div>
      <div className="bg-white-100 p-4 rounded-2xl sm:mt-2.5 mt-1">
        <h3 className="sm:text-xl text-sm  font-medium sm:mb-2 mb-1 sm:leading-[22px] leading-3">
          {product.name}
        </h3>
        <div className="flex gap-2 items-center sm:mb-4 mb-3">
          <div className="text-secondary font-medium sm:text-base text-sm">
            {product.newPrice} ₽
          </div>
          {product.oldPrice && (
            <div className="text-secondary font-medium text-sm relative">
              {product.oldPrice} ₽
              <div className="border border-secondary absolute top-[9px] w-full"></div>
            </div>
          )}
        </div>

        <ProductCount />
      </div>
      <MyButton
        value="В корзину"
        className="sm:mt-3 mt-1 w-[100%] text-base font-medium"
      />
    </div>
  );
};
