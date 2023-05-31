import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerLeft from "./components/Drawers";
import { HomePage } from "./pages/HomePage";
import { Typography } from "@mui/material";

function App() {
  return (
    <DrawerLeft>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={<Typography variant="h3">Error 404 </Typography>}
          />
        </Routes>
      </BrowserRouter>
    </DrawerLeft>
  );
}

export default App;
