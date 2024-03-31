import { useState } from "react";
import { Box, TextField, Button, IconButton } from "@mui/material";
import Send from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addNewMessage } from "../redux/chat/actionCreators";

// Define validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
const ChatField = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use yup as resolver
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    dispatch(
      addNewMessage([
        {
          userOne: "1233",
          userTwo: "1233",
          text: "New message",
          date: "mar 3 1998",
        },
      ])
    );
  };

  return (
    <Box
      sx={{
        //   position: "absolute",
        //   bottom: "0px",
        backgroundColor: "white",
        display: "flex",
        height: {
          xs: "65px",
          sm: "10vh",
        },
        justifyContent: "center",
        padding: "0px",
        // paddingLeft: "20px",
        // paddingBottom: "100px",
        borderLeft: "1px solid #F4F4F4",
        zIndex: "999",
        alignItems: "center",
      }}
    >
      {/* <input
        placeholder="write something..."
        style={{
          height: "30px",
          padding: "20px",
          borderRadius: "20px",
          width: "50%",
          bottom: "0px",
        }}
      /> */}

      <Box
        sx={{
          //   padding: "50px",
          paddingLeft: {
            xs: "5px",
            sm: "10%",
            md: "20%",
          },
          paddingRight: {
            xs: "5px",
            sm: "10%",
            md: "20%",
          },
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <form
          // onSubmit={handleSubmit(onSubmit)}
          // onSubmit={onSubmit}
          style={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <input
            {...register("message")}
            placeholder="write something..."
            style={{
              borderRadius: "20px",
              width: "100%",
              height: "30px",
              padding: "20px",
            }}
          />

          <IconButton
            onClick={onSubmit}
            // variant="contained"
            type="submit"
            sx={{
              height: "50px",
              borderBottomRightRadius: "20px",
              // borderBottomRightRadius: "20px",
              borderTopRightRadius: "20px",
              // borderTopRightRadius: "20px",
              "&:focus": {
                outline: "none", // Remove outline on focus
              },
            }}
          >
            <Send
              color="primary"
              sx={{
                fontSize: "40px",
                "&:focus": {
                  outline: "none", // Remove outline on focus
                },
              }}
            />
            {/* Send */}
          </IconButton>
        </form>
      </Box>
    </Box>
  );
};

export default ChatField;
