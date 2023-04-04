import Grid from "@mui/material/Grid";
import twitterLogo from "../../assets/twitter.png";
import telegream from  "../../assets/telegram.png"
import mediumLogo from "../../assets/medium.png";
import bscLogo from "../../assets/bscscan.png";

export default function Footer() {
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={4}>
      <Grid item>
        <a href="">
          <img src={twitterLogo} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="">
          <img src={mediumLogo} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://bscscan.com/address/0xFbdC112bB84dBB83a053a69E7B4C2A140deAA3B9">
          <img src={bscLogo} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="">
          <img src={telegream} alt="" width={48} height={48} />
        </a>
      </Grid>
    </Grid>
  );
}


