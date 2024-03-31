import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, MenuItem, Menu, Drawer, Box, Typography } from "@mui/material";
import LeftLayout from "../component/layouts/leftLayout";
import HorizontalTabs from "../component/layouts/horizontalTabs";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "40px",
  border: "1px solid black",
  borderColor: "black",
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  marginLeft: 0,
  width: "100%",
  colo: "black",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(1),
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

export default function NavBar() {
  const [left, setLeft] = React.useState(false);

  const toggleDrawer = () => {
    setLeft(!left);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        // backgroundColor: "white",
        // borderRight: "1px solid black",
      }}
    >
      <AppBar
        // position="absolute"
        elevation={0} // Remove elevation and shadow
        sx={{
          backgroundColor: "#ffffff",
          // borderRight: "1px solid black",

          left: "0px",
          // alignItems: "flex-start",
          width: {
            xs: "100%",
            sm: "33.3333333333%",
          },
        }}
      >
        <Toolbar>
          <Drawer
            anchor="left"
            open={left}
            onClose={toggleDrawer}
            sx={{
              // width: {
              //   xs: "70%",
              //   sm: "50%",
              // },
              border: "none",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: {
                  xs: "70%",
                  sm: "20%",
                },
              },
            }}
          >
            <LeftLayout />
          </Drawer>

          <IconButton
            size="large"
            edge="start"
            // color="black"
            onClick={toggleDrawer}
            sx={{
              mr: 2,
              border: "none",
              "&:focus": {
                outline: "none", // Remove outline on focus
              },
            }}
          >
            <MenuIcon sx={{ border: "none" }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
        {/* <HorizontalTabs /> */}
      </AppBar>
    </Box>
  );
}
