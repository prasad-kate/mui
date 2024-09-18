import {
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
  Checkbox as MuiCheckbox,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface CheckboxControllerProps extends CheckboxProps {
  name: string;
  label: string;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxControllerProps> = ({
  name,
  label,
  required = false,
  ...muiProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <div>
          <FormControlLabel
            control={
              <MuiCheckbox {...field} checked={!!field.value} {...muiProps} />
            }
            label={
              <>
                {label}
                {required && (
                  <Typography
                    component="span"
                    color="error"
                    aria-hidden="true"
                    sx={{ ml: 0.5 }}
                  >
                    *
                  </Typography>
                )}
              </>
            }
          />
          {errors[name] && (
            <FormHelperText error>
              {errors[name]?.message?.toString()}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
};

export default Checkbox;
