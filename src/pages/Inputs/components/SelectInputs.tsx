import { Grid2 as Grid } from "@mui/material";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";
import { options } from "../../../constants/options.tsx";

function SelectInputs() {
  return (
    <>
      <Title title="Select Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <Select name="select" label="Select" options={options} />
        </Grid>
        <Grid size={4}>
          <Select
            name="multiSelect"
            label="Select"
            options={options}
            multiple
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SelectInputs;
