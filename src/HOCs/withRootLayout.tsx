import RootLayout from "../components/RootLayout";
import { withRootLayoutHocProps } from "../types";

function withRootLayout({
  component: WrappedComponent,
}: withRootLayoutHocProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WrappedWithRootLayou(props: any) {
    return (
      <RootLayout>
        <WrappedComponent {...props} />
      </RootLayout>
    );
  };
}

export default withRootLayout;
