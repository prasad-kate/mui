import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { SelectInputProps } from "../../types";

function Select({
  name,
  label,
  placeholder,
  required,
  options,
  multiple = false,
  ...props
}: SelectInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth required={required} error={!!error}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <MuiSelect
            {...field}
            labelId={`${name}-label`}
            id={name}
            label={label}
            displayEmpty
            variant="standard"
            multiple={multiple}
            value={
              multiple
                ? Array.isArray(field.value)
                  ? field.value
                  : []
                : field.value || ""
            }
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            renderValue={(selected) =>
              multiple ? (
                Array.isArray(selected) ? (
                  selected
                    .map(
                      (val) =>
                        options.find((option) => option.value === val)
                          ?.display_name
                    )
                    .join(", ")
                ) : (
                  ""
                )
              ) : selected === "" ? (
                <em>{placeholder}</em>
              ) : (
                options.find((option) => option.value === selected)
                  ?.display_name
              )
            }
            {...props}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.display_name}
              </MenuItem>
            ))}
          </MuiSelect>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}

export default Select;
