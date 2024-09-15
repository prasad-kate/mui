import { Grid2 as Grid } from "@mui/material";
import { RootLayoutProps } from "../../types";
import Sidebar from "./components/Sidebar";

function RootLayout({ children }: RootLayoutProps) {
  return (
    <Grid container columnSpacing={2} className="h-screen">
      <Grid size={2}>
        <Sidebar />
      </Grid>
      <Grid size={10}>{children}</Grid>
    </Grid>
  );
}

export default RootLayout;
