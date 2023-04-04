import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#CBC3E3",
  marginBottom: 24,
  height:"fit-content",
});

const detailsMap = [
  {
    label: "Daily Return",
    value: 8,
  },
  {
    label: "APR",
    value: 2920,
  },
  {
    label: "Dev Fee",
    value: 3,
  },
  {
    label: "Safety Fee",
    value: 5,
  },
];

export default function Details() {
  return (
    <CardWrapper>
      <CardContent>
        <div
          style={{
            textAlign: "right",
            position: "relative",
            height: "10px",
            top: "-20px",
            right: "-30px",
          }}
        >
        </div>
        <Box>
          {" "}
          {detailsMap.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom>
                {" "}
                {f.label}{" "}
              </Typography>{" "}
              <Typography gutterBottom> {f.value} % </Typography>{" "}
            </Grid>
          ))}{" "}
        </Box>{" "}
      </CardContent>{" "}
    </CardWrapper>
  );
}
