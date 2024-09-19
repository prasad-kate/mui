import { CheckboxProps, SelectProps, TextFieldProps } from "@mui/material";
import { ComponentType, ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}
export interface MenuItemProps {
  name: string;
  path: string;
}

export interface withRootLayoutHocProps {
  component: ComponentType;
}

export interface TextInputProps extends Omit<TextFieldProps, "name"> {
  name: string;
}

type Option = {
  display_name: string;
  value: string | number;
};

export interface SelectInputProps extends Omit<SelectProps, "name"> {
  name: string;
  options: Option[];
}

export interface CheckBoxInputProps extends Omit<CheckboxProps, "name"> {
  name: string;
  label?: string;
  required?: boolean;
}

export interface DatePickerInputProps extends Omit<TextFieldProps, "name"> {
  name: string;
  label?: string;
  required?: boolean;
}
