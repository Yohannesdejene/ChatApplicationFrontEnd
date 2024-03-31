import { Box, Avatar, Typography } from "@mui/material";
const ChatLink = () => {
  return (
    <Box
      sx={{
        // border: "1px solid black",
        display: "flex",
        gap: "10px",
        padding: "5px",
      }}
    >
      {1 === 1 ? (
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: "50px", height: "50px" }}
        />
      ) : (
        <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "82%",
          paddingRight: "20px",
        }}
      >
        <Box
          sx={{
            mt: "2px",
            display: "flex",
            gap: {
              xs: "5%",
              sm: "8%",
            },
            // justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
          >
            hiwot
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "roboto",
              mr: "10px",
            }}
          >
            mar 13
          </Typography>
        </Box>

        <Typography
          sx={{
            display: "flex",
            flexWrap: "none",
            fontSize: "13px",
            fontFamily: "roboto",
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          To align FullName to the left end and to the right end in the same
          horizontal li To align "FullName" to the left end and to the right end
          in To align FullName to the left end and to the right end in the same
          horizontal li To align "FullName" to the left end and to the right To
          align FullName to the left end and to the right end in the same
          horizontal li To align "FullName" to the left end and to the right
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatLink;
