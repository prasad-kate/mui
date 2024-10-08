import { FormProvider, useForm } from "react-hook-form";
import withRootLayout from "../../HOCs/withRootLayout";
import CheckboxInputs from "./components/CheckboxInputs";
import DatePickerInputs from "./components/DateInputs";
import RadioButtonInputs from "./components/RadioButtons";
import SelectInputs from "./components/SelectInputs";
import SwitchInputs from "./components/SwitchInputs";
import TextInputs from "./components/TextInputs";
import ToggleButtonInputs from "./components/ToggleButtonInputs";

function Inputs() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <TextInputs />
      <SelectInputs />
      <CheckboxInputs />
      <DatePickerInputs />
      <RadioButtonInputs />
      <SwitchInputs />
      <ToggleButtonInputs />
    </FormProvider>
  );
}

export default withRootLayout({
  component: Inputs,
});
