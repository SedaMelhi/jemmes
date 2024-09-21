import { AccordionTrigger } from "@radix-ui/react-accordion";
import { FC } from "react";

export const Menu: FC = () => {
  return (
    <AccordionTrigger className="AccordionTrigger">
      <div className="menu lg:hidden flex flex-col gap-1.5 cursor-pointer lg:pl-0 pl-2">
        <div className="bg-primary w-[24px] h-[2px] transition-transform duration-150"></div>
        <div className="bg-primary w-[24px] h-[2px] transition-opacity duration-150"></div>
        <div className="bg-primary w-[24px] h-[2px] transition-transform duration-150"></div>
      </div>
    </AccordionTrigger>
  );
};
