import Button from "../components/ui/Button";
import withRootLayout from "../HOCs/withRootLayout";

function Buttons() {
  const titleClass: string = "my-2";
  const buttonContainerClass: string = "flex items-center gap-5 mb-8";
  return (
    <>
      <p className={titleClass}>Contained Variants: </p>
      <div className={buttonContainerClass}>
        <Button name="primary" color="primary" />
        <Button name="secondary" color="secondary" />
        <Button name="info" color="info" />
        <Button name="success" color="success" />
        <Button name="warning" color="warning" />
        <Button name="error" color="error" />
      </div>

      <p className={titleClass}>Outlined Variants: </p>
      <div className={buttonContainerClass}>
        <Button name="primary" color="primary" variant="outlined" />
        <Button name="secondary" color="secondary" variant="outlined" />
        <Button name="info" color="info" variant="outlined" />
        <Button name="success" color="success" variant="outlined" />
        <Button name="warning" color="warning" variant="outlined" />
        <Button name="error" color="error" variant="outlined" />
      </div>

      <p className={titleClass}>Text Variants: </p>
      <div className={buttonContainerClass}>
        <Button name="primary" color="primary" variant="text" />
        <Button name="secondary" color="secondary" variant="text" />
        <Button name="info" color="info" variant="text" />
        <Button name="success" color="success" variant="text" />
        <Button name="warning" color="warning" variant="text" />
        <Button name="error" color="error" variant="text" />
      </div>
    </>
  );
}

export default withRootLayout({ component: Buttons });
