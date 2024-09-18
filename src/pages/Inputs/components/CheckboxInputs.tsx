import { Grid2 as Grid } from "@mui/material";
import Checkbox from "../../../components/ui/Checkbox";
import Title from "../../../components/ui/Title";

function CheckboxInputs() {
  return (
    <>
      <Title title="Checkbox Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <Checkbox name="checkbox" label="Checkbox" />
        </Grid>
        <Grid size={4}>
          <Checkbox name="checkboxRequired" label="Checkbox" required />
        </Grid>
      </Grid>
    </>
  );
}

export default CheckboxInputs;
