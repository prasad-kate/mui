import { FormProvider, useForm } from "react-hook-form";
import withRootLayout from "../../HOCs/withRootLayout";
import CheckboxInputs from "./components/CheckboxInputs";
import SelectInputs from "./components/SelectInputs";
import TextInputs from "./components/TextInputs";
import DatePickerInputs from "./components/DateInputs";
import RadioButtonInputs from "./components/RadioButtons";

function Inputs() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <TextInputs />
      <SelectInputs />
      <CheckboxInputs />
      <DatePickerInputs />
      <RadioButtonInputs />
    </FormProvider>
  );
}

export default withRootLayout({
  component: Inputs,
});
