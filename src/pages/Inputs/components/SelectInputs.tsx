import { Grid2 as Grid } from "@mui/material";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";

function SelectInputs() {
  const options = [
    {
      display_name: "option 1",
      value: 1,
    },
    {
      display_name: "option 2",
      value: 2,
    },
    {
      display_name: "option 3",
      value: 3,
    },
  ];

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
