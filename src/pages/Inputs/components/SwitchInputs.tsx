import { Grid2 as Grid } from "@mui/material";
import Switch from "../../../components/ui/Switch";
import Title from "../../../components/ui/Title";

function SwitchInputs() {
  return (
    <>
      <Title title="Switch Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <Switch name="switchInput" label="Switch" />
        </Grid>
        <Grid size={4}>
          <Switch name="switchInputSide" label="Switch" labelPosition="side" />
        </Grid>
      </Grid>
    </>
  );
}

export default SwitchInputs;
