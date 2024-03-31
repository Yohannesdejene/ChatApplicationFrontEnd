import {
  Box,
  Button,
  IconButton,
  Typography,
  Avatar,
  Link,
  Grid,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Profile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        gap: "10px",
        p: "5px",
        pl: { xs: "1px", sm: "20px" },
        borderLeft: "1px solid #F4F4F4",
        zIndex: "999",
      }}
    >
      <IconButton
        component={Link}
        href="/"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          "&:focus": {
            outline: "none", // Remove outline on focus
          },
        }}
      >
        <KeyboardBackspaceIcon />
      </IconButton>

      <Grid container spacing={2}>
        <Grid item xs={9} sm={10} sx={{ display: "flex" }}>
          <Box>
            {1 === 1 ? (
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "50px", height: "50px" }}
              />
            ) : (
              <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "10px",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
            >
              hiwot
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexWrap: "none",
                fontSize: "16px",
                fontFamily: "roboto",
                textAlign: "justify",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              last seen mar 34
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            mr: {
              xs: "5px",
              sm: "0px",
            },
          }}
        >
          <IconButton
            sx={{
              "&:focus": {
                outline: "none", // Remove outline on focus
              },
            }}
          >
            <CallIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              "&:focus": {
                outline: "none", // Remove outline on focus
              },
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
