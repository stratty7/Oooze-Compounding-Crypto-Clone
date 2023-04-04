import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));


export default function Header() {
  return (
    <Wrapper>
      <Connect responsive={false} />{" "}
      <Typography
        style={{ color: "grey" }}
        variant="h6"
        marginTop={-3}
      ></Typography>{" "}
    </Wrapper>
  );
}
