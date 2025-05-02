import { forwardRef, ReactNode, MouseEvent } from "react";
import {
  Size,
  SizeType,
  Variant,
  VariantType,
} from "../../shared/services/parameters/parameters";
import { classes } from "../../shared/utils";

import styles from "./buttonForm.module.css";

type Ref = HTMLButtonElement;
type Props = {
  children: ReactNode;
  size?: SizeType;
  variant?: VariantType;
  fullWidth?: boolean;
  elementType?: "button" | "a";
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  onclick: (e: MouseEvent<HTMLElement>) => void;
};

export const ButtonForm = forwardRef<Ref, Props>(function Button(props, ref) {
  const {
    elementType: ElementType = "button",
    children,
    size = "m",
    variant = "primary",
    fullWidth = true,
    type = "button",
    disabled = false,
    onclick,
    ...rest
  } = props;

  return (
    <ElementType
      className={classes(styles.button, {
        [styles[Size[size]]]: !!size,
        [styles[Variant[variant]]]: !!variant,
        [styles.fullWidth]: fullWidth,
      })}
      onClick={onclick}
      {...rest}
      type={type}
      disabled={disabled}
      // @ts-expect-error - ref should refer to the same type of element as ElementType
      ref={ref}
    >
      {children}
    </ElementType>
  );
});
