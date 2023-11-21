import { ChangeEvent, FC, useRef, useState, InputHTMLAttributes } from "react";
import s from "./FileInput.module.scss";
import classNames from "classnames";

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  alloudFileTypes?: string;
  placeholder: string;
  fileUploaded?: (file: File) => void;
  className?: string;
}

const FileInput: FC<FileInputProps> = ({ alloudFileTypes = "image/*,.pdf", placeholder, fileUploaded, className, ...rest }) => {
  const myInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    myInput.current?.click();
  };

  const onFileLoad = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files![0];
    setFile(selectedFile);
    if (fileUploaded) {
      fileUploaded(selectedFile);
    }
  };

  return (
    <div onClick={handleClick} className={classNames(s.input__container, className ?? '')}>
      {file ? (
        <span className={classNames(s.input__text, s.text__color)}>{file.name}</span>
      ) : (
        <span className={s.input__text}>{placeholder}</span>
      )}
      <input onChange={onFileLoad} ref={myInput} type="file" accept={alloudFileTypes} className={s.input} {...rest} />
    </div>
  );
};
export default FileInput;
