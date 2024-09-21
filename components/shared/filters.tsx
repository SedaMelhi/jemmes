import { FC } from "react";

interface FiltersProps {
  activeFilter: number;
  setActiveFilter: (id: number) => void;
}

export const Filters: FC<FiltersProps> = ({
  activeFilter,
  setActiveFilter,
}) => {
  const filters = [
    {
      value: "Хиты продаж",
      id: 0,
    },
    {
      value: "Новые поступления",
      id: 1,
    },
    {
      value: "Акции",
      id: 2,
    },
  ];
  return (
    <div className="flex gap-3">
      {filters.map(({ value, id }) => (
        <div
          key={id}
          onClick={() => setActiveFilter(id)}
          className={`py-2 px-5 rounded-xl cursor-pointer border hover:bg-accent hover:text-white-100 hover:border-accent duration-200 transition-colors  ${
            activeFilter === id
              ? "bg-accent text-white-100 border-accent"
              : "border-light-grey text-secondary"
          } ${id === 2 ? "sm:block hidden" : ""}`}
        >
          {value.split(" ").map((item, i) => (
            <span
              key={i}
              className={`${
                i === 1 && id === 1
                  ? "390:inline hidden"
                  : i === 1 && id === 0
                  ? "310:inline hidden"
                  : ""
              }`}
            >
              {item}
              {i === 0 && " "}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
