import { FormProvider, useForm } from "react-hook-form";
import withRootLayout from "../../HOCs/withRootLayout";
import SelectInputs from "./components/SelectInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextInputs />
      <SelectInputs />
    </FormProvider>
  );
}

export default withRootLayout({
  component: Inputs,
});
