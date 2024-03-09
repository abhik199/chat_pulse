import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
const AppLayout = () => (WrapperComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { sx: "none", sm: "block" },
            }}
            height={"100%"}
          >
            Hi
          </Grid>
          <Grid item xs={12} sm={8} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { sx: "none", md: "block" },
              padding: "2rem",
            }}
          >
            3
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
