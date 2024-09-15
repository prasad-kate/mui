import { ButtonProps, Button as MuiButton } from "@mui/material";

function Button({ variant = "contained", size, name, ...props }: ButtonProps) {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {name}
    </MuiButton>
  );
}

export default Button;
