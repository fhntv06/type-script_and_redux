import { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset" | undefined,
  disabled: boolean,
  onClick: () => void,
  tabIndex: number | undefined,
  children: ReactNode,
}

const Button = ({
  type,
  disabled,
  onClick,
  tabIndex,
  children,
}: Props) => (
  <button type={type} disabled={disabled} onClick={() => onClick()} tabIndex={tabIndex}>
    {children}
  </button>
);

export default Button;
