import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../components/ui/TextInput";
import withRootLayout from "../../HOCs/withRootLayout";
import { Grid2 as Grid } from "@mui/material";

function Inputs() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Grid container columnSpacing={3} className="p-3">
        <Grid size={4}>
          <TextInput name="outlined" variant="outlined" label="Text Input" />
        </Grid>
        <Grid size={4}>
          <TextInput name="filled" variant="filled" label="Text Input" />
        </Grid>
        <Grid size={4}>
          <TextInput name="standard" variant="standard" label="Text Input" />
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default withRootLayout({
  component: Inputs,
});
