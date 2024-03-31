import * as React from "react";
import { Box, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ContactList from "../../page/ContactList";
export default function HorizontalTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        // display: "flex",
        // paddingLeft: "20px",
        // paddingRight: "20px",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: "1px solid black",
            borderColor: "divider",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Private"
              value="1"
              sx={{
                textTransform: "none",
                "&:focus": {
                  outline: "none", // Remove outline on focus
                },
              }}
            />
            <Tab
              label="Groups"
              value="2"
              sx={{
                textTransform: "none",
                "&:focus": {
                  outline: "none", // Remove outline on focus
                },
              }}
            />
            <Tab
              label="Channels"
              value="3"
              sx={{
                textTransform: "none",
                "&:focus": {
                  outline: "none", // Remove outline on focus
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ContactList />
        </TabPanel>
        <TabPanel value="2">
          <ContactList />
        </TabPanel>
        <TabPanel value="3">
          <ContactList />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
