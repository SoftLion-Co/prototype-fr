import s from "./ProductListComponent.module.scss";
import Image from "next/image";

import Vector from "@/images/personale-space/label-icon-vector.svg";
// import Design from "@/images/personale-space/label-icon-design.svg";
// import Development from "@/images/personale-space/label-icon-development.svg";
// import Security from "@/images/personale-space/label-icon-security.svg";

interface ProductList {
  categoryStates: Record<string, boolean>;
  uniqueService: {
    title: string;
    description: string;
  }[];
  isButtonActive?: boolean;
}

const ProductListComponent: React.FC<ProductList> = ({
  categoryStates,
  uniqueService,
  isButtonActive,
}) => {
  return (
    <>
      {isButtonActive ? (
        <div className={s.product__list}>
          <h2 className={s.title}>Перелік послуг</h2>
          <ul>
            {uniqueService.map((project, index) => {
              const isVisible =
                categoryStates[project.title] ||
                !Object.values(categoryStates).some((value) => value);

              return isVisible ? (
                <li className={s.block__listItem} key={index}>
                  <Image
                    width={24}
                    height={23}
                    src={Vector}
                    alt={project.title}
                  />
                  <h3>{project.description}</h3>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ProductListComponent;
