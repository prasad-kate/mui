import { Grid2 as Grid } from "@mui/material";
import Title from "../../../components/ui/Title";
import ToggleButton from "../../../components/ui/ToggleButton";
import { ToggleButtonOptions } from "../../../constants/options";

function ToggleButtonInputs() {
  return (
    <>
      <Title title="Switch Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <ToggleButton
            name="toggleButtons"
            label="Toggle Buttons"
            options={ToggleButtonOptions}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ToggleButtonInputs;
