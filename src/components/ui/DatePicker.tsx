import {
  LocalizationProvider,
  DesktopDatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { DatePickerInputProps } from "../../types";

const CustomLabel = ({
  label,
  required,
}: {
  label?: string;
  required?: boolean;
}) =>
  label && (
    <span>
      {label}
      {required && <span className="text-red-600 ms-1">*</span>}
    </span>
  );

const DatePickerInput = ({
  name,
  label,
  required,
  ...rest
}: DatePickerInputProps) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value, ref } }) => (
          <MuiDatePicker
            label={<CustomLabel label={label} required={required} />}
            value={value ? dayjs(value, "DD/MM/YYYY") : null}
            onChange={(date: Dayjs | null) => {
              if (date) {
                onChange(date.format("DD/MM/YYYY"));
              } else {
                onChange(null);
              }
            }}
            views={["year", "month", "day"]}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                inputRef: ref,
                fullWidth: true,
                ...rest,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
