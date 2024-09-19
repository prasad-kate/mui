import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Switch as MuiSwitch,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface SwitchProps {
  name: string;
  label: string;
  labelPosition?: "top" | "side";
  required?: boolean;
}

const Switch = ({
  name,
  label,
  labelPosition = "top",
  required,
}: SwitchProps) => {
  const { control } = useFormContext();

  return (
    <FormControl required={required}>
      {labelPosition === "top" && (
        <FormLabel className="cursor-pointer" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value, ref } }) => (
          <FormControlLabel
            control={
              <MuiSwitch
                id={name}
                inputRef={ref}
                checked={value}
                onChange={(event) => {
                  onChange(event.target.checked);
                }}
              />
            }
            label={labelPosition === "side" && label}
          />
        )}
      />
    </FormControl>
  );
};

export default Switch;
