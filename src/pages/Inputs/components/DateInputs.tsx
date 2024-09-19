import { Grid2 as Grid } from "@mui/material";
import DatePickerInput from "../../../components/ui/DatePicker";
import Title from "../../../components/ui/Title";

function DatePickerInputs() {
  return (
    <>
      <Title title="Date Picker Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <DatePickerInput name="datePicker" label="DD/MM/YYYY" />
        </Grid>
        <Grid size={4}>
          <DatePickerInput
            name="datePicker"
            label="DD/MM/YYYY"
            variant="filled"
            required
          />
        </Grid>
        <Grid size={4}>
          <DatePickerInput
            name="datePicker3"
            variant="standard"
            label="DD/MM/YYYY"
            required
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DatePickerInputs;
