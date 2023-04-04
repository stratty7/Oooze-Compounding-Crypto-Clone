import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#CBC3E3",
  marginBottom: 24,
});

export default function Guide() {
  return (
    <CardWrapper>
      <CardContent>
        <Box>
          <Typography gutterBottom variant="h5" textAlign="center">
            Guide{" "}
          </Typography>{" "}
          <Typography variant="body2" textAlign="center">
            Deposit BNB in exchange for Ooze.
          </Typography>
          <Typography variant="body2" textAlign="center">
            Your Ooze will go to work mutating into more ooze.
          </Typography>
          <Typography gutterBottom variant="body2" textAlign="center">
            You will earn 8% of your Ooze per day in the form of BNB shown under
            Your Rewards
          </Typography>
          <Typography variant="body2" textAlign="center">
            The 5% safety fee will be inserted into farms/pools voted on by
            you on twitter, and then used to replenish the contract when
            needed
          </Typography>
          <Typography variant="caption" textAlign="center">
            * Follow the 6:1 protocol to extend the life of the platform.
          </Typography>
          <Typography variant="caption" textAlign="center">
            That means compounding your earnings 6 days, followed by claiming
            the 7th day.
          </Typography>
        </Box>{" "}
      </CardContent>{" "}
    </CardWrapper>
  );
}
