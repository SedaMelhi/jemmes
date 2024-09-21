import { FC } from "react";
import { Input } from "../ui/input";
import { Search } from "../svg";

export const SearchInput: FC = () => {
  return (
    <div className="relative flex items-center">
      <Input className="lg:inline-block hidden h-11 w-60 rounded-2xl pl-10 font-medium text-primary tracking-[-0.32px] text-base focus:pl-4 peer" />
      <Search className="lg:absolute static inset-y-2.5 inset-x-2.5 lg:pointer-events-none cursor-pointer peer-focus:opacity-0" />
    </div>
  );
};
