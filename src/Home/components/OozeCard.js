import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import Web3 from "web3";

import PriceInput from "./PriceInput";
import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import logo from "../../assets/cooking.png";

import { TODO_LIST_ADDRESS } from "../../config";
import toast from "react-hot-toast";
import React from "react";

const CardWrapper = styled(Card)({
  background: "#CBC3E3",
  marginBottom: 24,
  fontFamily: "Montserrat",
});

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function OozeCard() {
  const { contract, wrongNetwork, getBnbBalance, fromWei, toWei, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBNB, setContractBNB] = useState(0);
  const [walletBalance, setWalletBalance] = useState({
    bnb: 0,
    ooze: 0,
    rewards: 0,
    participants: 0,
    timesBarrelled: 0,
  });
  const [barrelBNB, setBarrelBNB] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();

  const fetchContractBNBBalance = () => {
    if (!web3 || wrongNetwork) {
      setContractBNB(0);
      return;
    }
    getBnbBalance(TODO_LIST_ADDRESS).then((amount) => {
      setContractBNB(fromWei(amount));
    });
  };

  const fetchWalletBalance = async () => {
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance({
        bnb: 0,
        ooze: 0,
        rewards: 0,
        participants: 0,
        timesBarrelled: 0,
      });
      return;
    }

    try {
      const [
        bnbAmount,
        oozeAmount,
        rewardsAmount,
        participants,
        timesBarrelled,
      ] = await Promise.all([
        getBnbBalance(address),
        contract.methods
          .getMyMiners(address)
          .call()
          .catch((err) => {
            console.error("myminers", err);
            return 0;
          }),
        contract.methods
          .oozeRewards(address)
          .call()
          .catch((err) => {
            console.error("oozeRewards", err);
            return 0;
          }),
        contract.methods
          .getParticipants()
          .call()
          .catch((err) => {
            console.error("participants", err);
            return 0;
          }),
        contract.methods
          .getTimesBarrelled()
          .call()
          .catch((err) => {
            console.error("participants", err);
            return 0;
          }),
      ]);
      setWalletBalance({
        bnb: fromWei(`${bnbAmount}`),
        ooze: oozeAmount,
        rewards: fromWei(`${rewardsAmount}`),
        participants: participants,
        timesBarrelled: timesBarrelled,
      });
    } catch (err) {
      console.error(err);
      setWalletBalance({
        bnb: 0,
        ooze: 0,
        rewards: 0,
        participants: 0,
        timesBarrelled: 0,
      });
    }
  };

  useEffect(() => {
    fetchContractBNBBalance();
  }, [web3, chainId]);

  useEffect(() => {
    fetchWalletBalance();
  }, [address, web3, chainId]);

  const onUpdateBarrelBNB = (value) => {
    setBarrelBNB(value);
  };

  const getRef = () => {
    const ref = Web3.utils.isAddress(query.get("ref"))
      ? query.get("ref")
      : "0x0000000000000000000000000000000000000000";
    return ref;
  };

  const barrel = async () => {
    setLoading(true);

    const ref = getRef();

    try {
      await contract.methods.buyOoze(ref).send({
        from: address,
        value: toWei(`${barrelBNB}`),
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };

  const reBarrel = async () => {
    setLoading(true);
    const ref = getRef();
    try {
      await contract.methods
        .barrelOoze(ref, true)
        .send({
          from: address,
        })
        .then(async function (tx) {
          const recep = await web3.eth.getTransactionReceipt(
            tx.transactionHash
          );
          if (recep.logs.length > 0)
            toast("Wow! 20% Mutation Successful", {
              icon: "🧬",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
                background: "#CBC3E3",
              },
            });
        });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const sellOoze = async () => {
    setLoading(true);

    try {
      await contract.methods.sellOoze().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };


  return (
    <CardWrapper>
      {" "}
      {loading && <LinearProgress color="secondary" />}{" "}
      <CardContent>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          mt={3}
        >
          <img src={logo} alt="" width={"75%"} />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="body1"> Contract </Typography>{" "}
          <Grid item display={"inline-flex"}>
            <Typography variant="h5"> {contractBNB} BNB </Typography>{" "}
          </Grid>
        </Grid>{" "}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="body1"> Wallet </Typography>{" "}
          <Grid item display={"inline-flex"}>
            <Typography variant="h5"> {walletBalance.bnb} BNB </Typography>{" "}
          </Grid>
        </Grid>{" "}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="body1"> Your Ooze </Typography>{" "}
          <Grid item display={"inline-flex"}>
            <Typography variant="h5"> {walletBalance.ooze} OOZE </Typography>{" "}
          </Grid>
        </Grid>{" "}
        <Box paddingTop={4} paddingBottom={3}>
          <Box>
            <PriceInput
              max={+walletBalance.bnb}
              value={barrelBNB}
              onChange={(value) => onUpdateBarrelBNB(value)}
            />{" "}
          </Box>{" "}
          <Box marginTop={3} marginBottom={3}>
            <Button
              style={{ background: "#C576F6", color: "white" }}
              variant="contained"
              fullWidth
              disabled={
                wrongNetwork ||
                !address ||
                +barrelBNB === 0 ||
                loading
              }
              onClick={barrel}
            >
              Pour Ooze{" "}
            </Button>{" "}
          </Box>{" "}
          <Divider />
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body1" fontWeight="bolder">
              Your Rewards{" "}
            </Typography>{" "}
            <Typography variant="h5" fontWeight="bolder">
              {" "}
              {walletBalance.rewards} BNB{" "}
            </Typography>{" "}
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body1" fontWeight="bolder">
              Mutation Chance{" "}
            </Typography>{" "}
            <Typography variant="h5" fontWeight="bolder">
              {" "}
              35%
            </Typography>{" "}
          </Grid>{" "}
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body1" fontWeight="bolder">
              Max Deposit{" "}
            </Typography>{" "}
            <Typography variant="h5" fontWeight="bolder">
              {" "}
              10 BNB{" "}
            </Typography>{" "}
          </Grid>
          <Divider />
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body1" fontWeight="bolder">
              Total Participants{" "}
            </Typography>{" "}
            <Typography variant="h5" fontWeight="bolder">
              {walletBalance.participants}
            </Typography>{" "}
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body1" fontWeight="bolder">
              Worldwide Total Times Barrelled{" "}
            </Typography>{" "}
            <Typography variant="h5" fontWeight="bolder">
              {walletBalance.timesBarrelled}
            </Typography>{" "}
          </Grid>
          <ButtonContainer container>
            <Grid item flexGrow={1} marginRight={1} marginTop={3}>
              <Button
                variant="contained"
                color="secondary"
                style={{ background: "#C576F6", color: "white" }}
                fullWidth
                disabled={wrongNetwork || !address || loading}
                onClick={reBarrel}
              >
                Barrel Ooze{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid item flexGrow={1} marginLeft={1} marginTop={3}>
              <Button
                variant="contained"
                color="secondary"
                style={{ background: "#C576F6", color: "white" }}
                fullWidth
                disabled={wrongNetwork || !address || loading}
                onClick={sellOoze}
              >
                Sell Ooze{" "}
              </Button>{" "}
            </Grid>{" "}
          </ButtonContainer>{" "}
        </Box>{" "}
        <Typography variant="caption" gutterBottom>
          {" "}
          * Barrel for 6 days and sell on the 7th day for max returns
        </Typography>{" "}
        <Typography variant="caption" gutterBottom>
          {" "}
          * When barreling OOZE there is a mutation chance for 20% extra OOZE
        </Typography>{" "}
      </CardContent>{" "}
    </CardWrapper>
  );
}
