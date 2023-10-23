import s from "./ProductListComponent.module.scss";
import useProductList from "./ProductList";
import Image from "next/image";

import Design from "@/images/personale-space/label-icon-design.svg";
import Development from "@/images/personale-space/label-icon-development.svg";
import Security from "@/images/personale-space/label-icon-security.svg";

interface ProductList {
  categoryStates: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
  selectedOrderStatus: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
  isButtonActive: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
}

const ProductListComponent: React.FC<ProductList> = ({
  categoryStates,
  selectedOrderStatus,
  isButtonActive,
}) => {
  const dataList = useProductList();
  const imageList = [Design, Development, Security];

  return (
    <>
      {isButtonActive ? (
        <div className={s.product__list}>
          <h2 className={s.title}>Перелік послуг</h2>
          <ul>
            {dataList.map((project, index) => {
              const isVisible =
                (project.title ===
                  "Creating sketches, defining the visual style, and designing the user interface." &&
                  ((categoryStates.design && selectedOrderStatus.design) ||
                    (!categoryStates.design &&
                      !categoryStates.development &&
                      !categoryStates.security &&
                      selectedOrderStatus.design))) ||
                (project.title ===
                  "Developing functionality, programming, and creating a database." &&
                  ((categoryStates.development &&
                    selectedOrderStatus.development) ||
                    (!categoryStates.development &&
                      !categoryStates.design &&
                      !categoryStates.security &&
                      selectedOrderStatus.development))) ||
                (project.title === "Implementing testing and bug fixing." &&
                  ((categoryStates.security && selectedOrderStatus.security) ||
                    (!categoryStates.security &&
                      !categoryStates.design &&
                      !categoryStates.development &&
                      selectedOrderStatus.security)));

              return isVisible ? (
                <li className={s.block__listItem} key={project.id}>
                  <Image
                    width={24}
                    height={23}
                    src={imageList[index]}
                    alt={imageList[index]}
                  />
                  <h3>{project.title}</h3>
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
