import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { TextInputProps } from "../../types";

function TextInput({
  name,
  label,
  placeholder,
  required,
  ...props
}: TextInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          id={name}
          label={label}
          placeholder={placeholder}
          fullWidth
          error={!!error}
          required={required}
          helperText={error ? error.message : null}
          {...props}
        />
      )}
    />
  );
}

export default TextInput;
