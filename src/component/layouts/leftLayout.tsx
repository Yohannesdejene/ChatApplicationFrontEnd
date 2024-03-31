import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
  Typography,
  useTheme,
  Link,
  Divider,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const LeftLayout = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        className="profile"
        sx={{
          ml: "20px",
          mt: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="image.png"
          sx={{ fontSize: "50px", width: "60px", height: "60px" }}
        />

        <Typography sx={{ mt: "15px", mb: "5px", color: "black" }}>
          User name
        </Typography>
        <Link
          href="#"
          sx={{
            textDecoration: "none",
            underline: "none",
            color: theme.palette.primary.main,
          }}
        >
          View Profile
        </Link>
      </Box>

      <Button
        startIcon={<AddIcon sx={{ color: "#000000" }} />}
        sx={{
          mt: "10px",
          ml: "10px",
          mb: "10px",
          display: "flex",
          "&:focus": {
            outline: "none", // Remove outline on focus
          },
        }}
      >
        <Typography
          style={{
            textTransform: "none",
            color: "#000000",
            // backgroundColor: theme.palette.secondary.main,
          }}
        >
          Add Account
        </Typography>
      </Button>
      <Button
        startIcon={<AccountCircleIcon sx={{ color: "#000000" }} />}
        sx={{
          ml: "10px",
          mb: "10px",
          display: "flex",
          "&:focus": {
            outline: "none", // Remove outline on focus
          },
        }}
      >
        <Typography
          style={{
            textTransform: "none",

            color: "#000000",
            // backgroundColor: theme.palette.secondary.main,
          }}
        >
          Contacts
        </Typography>
      </Button>
      <Button
        startIcon={<PeopleIcon sx={{ color: "#000000" }} />}
        sx={{
          ml: "10px",
          mb: "10px",
          display: "flex",
          "&:focus": {
            outline: "none", // Remove outline on focus
          },
        }}
      >
        <Typography
          style={{
            textTransform: "none",

            color: "#000000",
            // backgroundColor: theme.palette.secondary.main,
          }}
        >
          New Group
        </Typography>
      </Button>
      <Button
        startIcon={<CampaignIcon sx={{ color: "#000000" }} />}
        sx={{
          ml: "10px",
          mb: "10px",
          display: "flex",
          "&:focus": {
            outline: "none", // Remove outline on focus
          },
        }}
      >
        <Typography
          style={{
            textTransform: "none",

            color: "#000000",
            // backgroundColor: theme.palette.secondary.main,
          }}
        >
          New Channel
        </Typography>
      </Button>

      <Divider
        sx={{ position: "absolute", bottom: 80, color: "red", width: "100%" }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          ml: "20px",
          width: "8%",
        }}
      >
        <Button
          startIcon={<SettingsIcon sx={{ color: "#000000" }} />}
          sx={{
            "&:focus": {
              outline: "none", // Remove outline on focus
            },
          }}
        >
          <Typography
            style={{
              textTransform: "none",
              color: "#000000",

              // color: theme.palette.primary.main,
              // backgroundColor: theme.palette.secondary.main,
            }}
          >
            Settings
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default LeftLayout;
