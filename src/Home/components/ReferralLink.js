import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#CBC3E3",
  marginBottom: 24,
  height: "160px",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: 0,
  border: "1px solid #555",
  background: "white",
  width: "100%",
  outline: "none",
  color: theme.palette.primary.main,
}));

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <CardWrapper>
      <CardContent
        style={{
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <div
          style={{
            textAlign: "right",
            position: "relative",
            top: "-30px",
            zIndex: "500",
            height: "10px",
            left: "-10px",
            transform: "scaleX(-1)",
          }}
        >
        </div>
        <div style={{ position: "relative" }}>
          <Typography gutterBottom variant="h5" textAlign="center">
            Referral Link{" "}
          </Typography>{" "}
          <Input value={address ? link : ""} readOnly />
          <Typography
            textAlign="center"
            variant="body2"
            marginTop={2}
            paddingX={3}
          >
            Earn 12 % of the BNB used to Barrel OOZE from anyone who uses your
            referral link{" "}
          </Typography>{" "}
        </div>
      </CardContent>{" "}
    </CardWrapper>
  );
}
