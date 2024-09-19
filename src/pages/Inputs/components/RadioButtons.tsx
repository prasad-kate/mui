import { Grid2 as Grid } from "@mui/material";
import RadioButton from "../../../components/ui/RadioButton";
import Title from "../../../components/ui/Title";
import { options } from "../../../constants/options";

function RadioButtonInputs() {
  return (
    <>
      <Title title="Radio Button Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <RadioButton
            name="radioButtons"
            label="Radio Buttons"
            options={options}
            row
          />
        </Grid>
      </Grid>
    </>
  );
}

export default RadioButtonInputs;
