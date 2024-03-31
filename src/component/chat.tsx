import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const CommonTextTypo = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "13px",
  color: "black",
});
const CommonDateTypo = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "12px",
});

const Chat = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "5px",
        // justifyContent: "center",
        width: {
          xs: "100%",
          sm: "80%",
          md: "60%",
          lg: "60%",
        },
        margin: "0 auto", // Center the container horizontally
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "6px",
          ml: "10px",
          mr: "10px",
        }}
      >
        {data?.userOne == 1233 ? (
          <Box sx={{ minWidth: "50%", maxWidth: "85%", marginRight: "auto" }}>
            <Grid
              spacing={1}
              container
              sx={{
                // minHeight: "auto",
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",

                paddingLeft: "10px",
                paddingTop: "5px",
                paddingBottom: "10px",
                paddingRight: "10px",
                backgroundColor: "#ffffff",
                // marginRight: "auto", // Align to the right by setting margin-left to auto

                // borderRadius: "20px",
                textAlign: "left",
              }}
            >
              <Grid item xs={9} sx={{ mt: "0px" }}>
                <CommonTextTypo>{data.text}</CommonTextTypo>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  pb: "0px",
                  // backgroundColor: "yellow",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#5D5D5D",
                    fontFamily: "Roboto",
                    // display: "flex",
                  }}
                >
                  {data.date}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box sx={{ minWidth: "50%", maxWidth: "85%", marginLeft: "auto" }}>
            <Grid
              spacing={1}
              sx={{
                // minHeight: "30px",
                paddingLeft: "10px",
                paddingTop: "7px",
                paddingBottom: "7px",
                paddingRight: "10px",
                backgroundColor: "#A8DAB6",
                alignItems: "right",
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "0px",

                display: "flex",
              }}
            >
              <Grid
                item
                xs={9}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <CommonTextTypo>{data.text}</CommonTextTypo>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#5D5D5D",
                    fontFamily: "Roboto",
                    display: "flex",
                  }}
                >
                  {data.date}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Chat;
