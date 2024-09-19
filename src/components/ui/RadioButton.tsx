import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Option {
  display_name: string;
  value: string | number;
}

interface RadioButtonGroupProps extends RadioGroupProps {
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
}

const RadioButton = ({
  name,
  label,
  options,
  required,
  ...rest
}: RadioButtonGroupProps) => {
  const { control } = useFormContext();

  return (
    <FormControl required={required}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <RadioGroup
            ref={ref}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            {...rest}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={<Radio />}
                label={option.display_name}
                value={option.value}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioButton;
