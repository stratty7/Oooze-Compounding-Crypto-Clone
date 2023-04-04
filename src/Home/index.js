import { styled } from "@mui/system";

import Header from "./components/Header";
import OozeCard from "./components/OozeCard";
import Details from "./components/Details";
import ReferralLink from "./components/ReferralLink";
import { useAuthContext } from "../providers/AuthProvider";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Guide from "./components/Guide";
import { Grid } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 1000,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default function Home() {
  const { address } = useAuthContext();

  return (
    <Wrapper>
      <Header />
      <Grid container spacing={2} style={{ flexFlow: "row", flexWrap: "wrap" }}>
        <Grid xs={12} sm={12} md={7} item>
          <OozeCard />
        </Grid>
        <Grid xs={12} sm={12} md={5} item alignSelf={"center"} style={{ maxWidth: "fit-content", flexFlow: "column" }}>
          <Details />
          <Guide />
          <Calculator />
        </Grid>
      </Grid>
      <ReferralLink address={address} />
      <Footer />
    </Wrapper>
  );
}
