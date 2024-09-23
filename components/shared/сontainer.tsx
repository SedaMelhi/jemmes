import { cn } from "../../lib/utils";
import { FC, ReactNode } from "react";

export const Container: FC<{
  children: ReactNode;
  className?: string;
  border?: string;
}> = ({ children, className, border }) => {
  return (
    <div className="lg:px-0 px-1.5">
      <div
        className={cn(
          border === "none"
            ? ""
            : "border-t border-light-grey rounded-[18px] mt-5 lg:pt-5 pt-2.5",
          "lg:px-5 px-2.5 max-w-[1560px] mx-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
