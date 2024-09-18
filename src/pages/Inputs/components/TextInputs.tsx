import { AccountCircle } from "@mui/icons-material";
import { Grid2 as Grid, InputAdornment } from "@mui/material";
import TextInput from "../../../components/ui/TextInput";
import Title from "../../../components/ui/Title";

function TextInputs() {
  return (
    <>
      <Title title="Text Inputs" />

      <Grid container columnSpacing={3} rowSpacing={3} className="p-3">
        <Grid size={4}>
          <TextInput name="outlined" variant="outlined" label="Text Input" />
        </Grid>
        <Grid size={4}>
          <TextInput name="filled" variant="filled" label="Text Input" />
        </Grid>
        <Grid size={4}>
          <TextInput name="standard" variant="standard" label="Text Input" />
        </Grid>
        <Grid size={4}>
          <TextInput
            name="startAdornment"
            variant="outlined"
            label="Text Input"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={4}>
          <TextInput
            name="endAdornment"
            variant="outlined"
            label="Text Input"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default TextInputs;
