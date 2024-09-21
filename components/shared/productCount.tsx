"use client";

import { FC, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const ProductCount: FC = () => {
  const [count, setCount] = useState(0);

  const onClick = (adjustment: number) => {
    setCount((prev) => prev + adjustment);
  };

  return (
    <div className="flex items-center justify-center space-x-2 bg-background rounded-full p-2">
      <Button
        className="sm:h-8 h-6 sm:w-8 w-6 shrink-0 rounded-full bg-accent flex justify-center items-center p-0"
        onClick={() => onClick(-1)}
        disabled={count <= 0}
      >
        <Image
          src="/minus.svg"
          alt="-"
          width={20}
          height={20}
          className="sm:w-auto w-4 h-auto"
        />
      </Button>
      <div className="flex-1 text-center">
        <div className="sm:text-2xl text-base sm:leading-6 leading-4 font-medium tracking-tighter">
          {count}
        </div>
      </div>
      <Button
        className="sm:h-8 h-6 sm:w-8 w-6 shrink-0 rounded-full bg-primary flex justify-center items-center p-0"
        onClick={() => onClick(1)}
      >
        <Image
          src="/plus.svg"
          alt="+"
          width={20}
          height={20}
          className="sm:w-auto w-4 h-auto"
        />
      </Button>
    </div>
  );
};
