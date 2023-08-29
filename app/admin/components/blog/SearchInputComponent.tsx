import s from "./SearchInputComponent.module.scss";

const SearchInputComponent = () => {
  return (
    <div className={s.container}>
      <input
        className={s.blog__input}
        type="Для пошуку за заголовком"
        name=""
        id=""
      />
      <button></button>
    </div>
  );
};

export default SearchInputComponent;
