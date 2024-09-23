import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";

type CustomBreadcrumbProps = {
  name: string;
  link: string;
  id: number;
};
export const CustomBreadcrumb: FC<{ items: CustomBreadcrumbProps[] }> = ({
  items,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="">
        {items.map((item, i) => (
          <BreadcrumbItem key={item.id}>
            {items.length - 1 === i ? (
              <BreadcrumbPage className="font-medium text-primary">
                {item.name}
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/" className="font-medium text-secondary">
                {item.name}
              </BreadcrumbLink>
            )}
            {items.length - 1 !== i && <div>/</div>}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
