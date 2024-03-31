import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Box, Grid } from "@mui/material";

// import LeftLayout from "./page/LeftLayout";
// import ChatPanel from "./page/ChatPanel";

// import NotFound from "./page/NotFound";
// import NavBar from "./page/NavBar";
// import Contacts from "./page/Contacts";
import Theme from "./theme";
import { Provider } from "react-redux";
// import store from "./store"; // Import the Redux store
import AllRoutes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {/* <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              <div>
                <NavBar />
                <Contacts />
              </div>
            }
          />
          <Route
            path="/chat/:chatUserId"
            element={
              <div>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <NavBar />
                </Box>
                <ChatPanel />
              </div>
            }
          />

          <Route path="/signup" element={<ChatPanel />} />
          <Route path="/contact" element={<Test />} />
          <Route path="/new" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
      <Router>
        <AllRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
