import s from "./ProductListComponent.module.scss";
import DynamicGradientSVG from "@/app/personal-space/components/DynamicGradientSVG";

interface ProductList {
  categoryStates: Record<string, boolean>;
  uniqueService: {
    title: string;
    description: string;
  }[];
  isButtonActive?: boolean;
  allColors?: { gradient1: string; gradient2: string }[];
}

const ProductListComponent: React.FC<ProductList> = ({
  categoryStates,
  uniqueService,
  isButtonActive,
  allColors,
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
                  <div className={s.block__icon}>
                    <DynamicGradientSVG
                      index={index}
                      categoryColors={allColors ? allColors[index] : undefined}
                    />
                  </div>
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
