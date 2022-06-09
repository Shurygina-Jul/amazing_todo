import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
}
