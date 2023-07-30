import s from "./EnterCodeSection.module.scss";
import React, { useRef } from "react";

const EnterCodeSection: React.FC = () => {
  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement>(null)
  );

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value.length > 0 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current!.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && !event.currentTarget.value) {
      inputRefs[index - 1].current!.focus();
    }
  };

  return (
    <div className={s.code}>
      {inputRefs.map((ref, index) => (
        <div key={index} className={s.code__inputWrapper}>
          <input
            className={s.code__input}
            key={index}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={ref}
          />
        </div>
      ))}
    </div>
  );
};

export default EnterCodeSection;
