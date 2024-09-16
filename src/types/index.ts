import { TextFieldProps } from "@mui/material";
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
