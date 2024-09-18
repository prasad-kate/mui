import { FormProvider, useForm } from "react-hook-form";
import withRootLayout from "../../HOCs/withRootLayout";
import CheckboxInputs from "./components/CheckboxInputs";
import SelectInputs from "./components/SelectInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextInputs />
      <SelectInputs />
      <CheckboxInputs />
    </FormProvider>
  );
}

export default withRootLayout({
  component: Inputs,
});
