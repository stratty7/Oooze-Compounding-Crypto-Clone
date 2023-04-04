import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { Toaster } from "react-hot-toast";
import React  from 'react';


function App() {
  return (
    <BrowserRouter>
      <Box
        style={{
          background:
            "linear-gradient(180deg, rgba(64,7,94,1) 6%, rgba(0,0,0,1) 100%)",
        }}
        paddingY={6}
        paddingX={2}
      >
        <Home />
        <Toaster />
      </Box>{" "}
    </BrowserRouter>
  );
}

export default App;
