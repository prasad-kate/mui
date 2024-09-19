import {
  FormControl,
  FormLabel,
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Option {
  display_name: string;
  value: string | number;
  icon: React.ReactNode; // Icon component or element
}

interface ToggleButtonGroupProps {
  name: string;
  label?: string;
  options: Option[];
  required?: boolean;
  showIconName?: boolean;
}

const ToggleButton = ({
  name,
  label,
  options,
  required,
  showIconName,
}: ToggleButtonGroupProps) => {
  const { control } = useFormContext();

  return (
    <FormControl required={required}>
      <FormLabel className="mb-2">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <ToggleButtonGroup
            ref={ref}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            exclusive
          >
            {options.map((option) => (
              <MuiToggleButton
                key={option.value}
                value={option.value}
                className="flex items-center gap-1"
              >
                {option.icon}
                {showIconName && <>{option.display_name}</>}
              </MuiToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      />
    </FormControl>
  );
};

export default ToggleButton;
