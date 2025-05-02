import {
  Size,
  SizeType,
  Variant,
  VariantType,
} from "../../shared/services/parameters/parameters";
import { classes } from "../../shared/utils";
import { capitalizeFirstLetter } from "../../shared/utils/capitalize";

import styles from "./input.module.css";

export type Props = {
  value: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  isDisabled?: boolean;
  size?: SizeType;
  fullWidth?: boolean;
  variant?: VariantType;
  error?: string;
  elementType?: "input";
  type?: string;
  required?: boolean;
  pattern?: string;
};

export const Input = ({
  elementType: ElementType = "input",
  label = "string",
  id = label || "id",
  isDisabled = false,
  size = "m",
  fullWidth = false,
  variant = "primary",
  error,
  handleChange,
  value,
  name,
  type,
  required,
  pattern,
  ...rest
}: Props) => {
  return (
    <div
      className={classes(styles.inputContainer, {
        [styles[Size[size]]]: !!size,
        [styles.fullWidth]: fullWidth,
      })}
    >
      <ElementType
        className={classes(styles.input, {
          [styles[Variant[variant]]]: variant,
          [styles.disabled]: isDisabled,
          [styles.placeholder]: label,
          [styles.errored]: error,
        })}
        placeholder={capitalizeFirstLetter(label)}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required={required}
        pattern={pattern}
        {...rest}
      />
      {error && (
        <span
          className={classes({
            [styles[`error_${Size[size]}`]]: !!size,
            [styles.errorSpan]: error,
          })}
        >
          {error}
        </span>
      )}
    </div>
  );
};
