import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";
import { MenuItem, Select, TextField } from "@mui/material";
import React  from 'react';
import { useState } from "react";

const CardWrapper = styled(Card)({
  background: "#CBC3E3",
  marginBottom: 24,
  textAlign: "center",
});


export default function Calculator() {
  const [profit, setProfit] = useState(0);
  const [weeks, setWeeks] = useState(7);
  const [val, setVal] = useState(0);
  const [days, setDays] = useState(0);

  const doCalc = (e, week) => {
    setDays(0);
    let balance = e * 1 - 0.03;
    let intrestBalance = balance * 0.08;
    let profit = 0;
    let day = 0;
    Array.from({ length: week ? week : weeks }, (x, i) => {
      console.log(i);
      console.log(balance);
      if ((i + 1) % 7 !== 0) {
        balance = balance + intrestBalance;
        intrestBalance = balance * 0.08;
      } else {
        profit += balance * 0.08 * (1 - 0.03);
        console.log(days);
        if (day === 0 && profit > e) {
          day = i + 1;
          setDays(i + 1);
        }
      }
    });
    setProfit(profit);
    setVal(e);
    return true;
  };

  const changeWeeks = (e) => {
    setDays(0);
    setWeeks(e);
    doCalc(val, e);
  };

  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Calculator
        </Typography>
        <Box display="flex" style={{placeContent: "center"}}>
          <TextField
            variant="outlined"
            onChange={(e) => doCalc(e.target.value)}
            label="$"
          ></TextField>
          <div>
            <Select
              value={weeks}
              label="Weeks"
              onChange={(e) => changeWeeks(e.target.value)}
            >
              <MenuItem value={7}>7 Days</MenuItem>
              <MenuItem value={14}>14 Days</MenuItem>
              <MenuItem value={21}>21 Days</MenuItem>
              <MenuItem value={28}>28 Days</MenuItem>
              <MenuItem value={35}>35 Days</MenuItem>
              <MenuItem value={42}>42 Days</MenuItem>
              <MenuItem value={49}>49 Days</MenuItem>
              <MenuItem value={56}>56 Days</MenuItem>
            </Select>
          </div>
        </Box>{" "}
        <Grid
          label="Week"
          container
          justifyContent="space-between"
          flexDirection="column"
        >
          <Typography variant="body1" gutterBottom>
            Total Profit: ${profit.toFixed(2)}
          </Typography>{" "}
          <Typography variant="body1" gutterBottom>
            Days To ROI: {days}
          </Typography>{" "}
          <Typography variant="caption" gutterBottom>
            This is based on compounding 6 days, followed by claiming 1 day
          </Typography>
          <Typography variant="caption" gutterBottom>
            {" "}
            * Please note, all values are based on the current value of Ooze.
            These values can change over time.
          </Typography>{" "}
        </Grid>
      </CardContent>{" "}
    </CardWrapper>
  );
}
