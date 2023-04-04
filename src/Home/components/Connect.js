import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { useAuthContext } from "../../providers/AuthProvider";

// const ConnectButton = styled(Button)(({ theme }) => ({
//   background: "#C576F6",
//   color: "white",
//   right: 48,
//   top: 12,
//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

const SmallScreenConnectButton = styled(Button)(({ theme }) => ({
  background: "#C576F6",
  color: "white",
  marginTop: -24,
  marginBottom: 48,
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export default function Connect() {
  const { address, loading, connect, disconnect } = useAuthContext();

  return (
    <SmallScreenConnectButton
      color="secondary"
      variant="contained"
      disabled={loading}
      onClick={() => (address ? disconnect() : connect())}
    >
      {address ? "Disconnect Wallet" : "Connect Wallet"}{" "}
    </SmallScreenConnectButton>
  );
}
