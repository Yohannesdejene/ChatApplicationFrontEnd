import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { addNewMessage } from "../redux/chat/actionCreators";
import { useDispatch, useSelector } from "react-redux";

import ContactList from "./ContactList";
import Chat from "../component/chat";

import HorizontalTabs from "../component/layouts/horizontalTabs";
import Profile from "../component/profile";
import ChatField from "../component/chatField";

const dete = [
  {
    userOne: "1233",
    userTwo: "4321",
    text: "who are you to say this",
    date: "mar 3 ",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "wI am yohannes",
    date: "mar 3 1998",
  },

  {
    userOne: "1233",
    userTwo: "4321",
    text: "I will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meet",
    date: "mar 3 1998",
  },
  {
    userOne: "1234",
    userTwo: "4321",
    text: "I don't think so",
    date: "mar 3 1998",
  },

  {
    userOne: "1235",
    userTwo: "4321",
    text: "I will tell you when we meet,I will tell you when we meet,I will tell you when we meet",
    date: "mar 3 1998",
  },
];
const ChatPanel = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const chatDetail = useSelector((state) => state.chat.chatDetail);

  const [chatUserId, setChatUserId] = useState(
    param?.chatUserId ? param.chatUserId : null
  );
  console.log("chatDetailvbefore", chatDetail);
  useEffect(() => {
    dispatch(addNewMessage(dete));
  }, []);

  console.log("chatDetailafter", chatDetail);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (param?.chatUserId) {
      setChatUserId(param?.chatUserId);
    }
  }, [param?.chatUserId]);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatDetail]);
  return (
    <Grid
      container
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        overflow: "hidden",
        alignItems: "flex-start",
      }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          height: "calc(100vh - 65px)",

          // overflowY: "scroll",
          scrollbarWidth: "thin",
          mt: "58px",
          padding: "10px",
        }}
      >
        {/* <ContactList /> */}

        <HorizontalTabs />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          height: "calc(100vh)", // Adjust based on your layout
          // overflowY: "scroll",
          // scrollbarWidth: "thin",
        }}

        // style={{
        //   top: "0px",
        // }}
      >
        {" "}
        <Profile />
        <Box
          sx={{
            height: {
              xs: "83vh",
              sm: "80vh",
            },
            overflowY: "scroll",

            scrollbarWidth: "thin",
            backgroundColor: "red",
            backgroundImage: `url('/background.png')`,
            // backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/283356059/display_1500/stock-vector-vector-seamless-mobile-apps-pattern-with-music-chat-gallery-speaking-bubble-email-magnifying-glass-283356059.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 100%", // Adjust the values to position the background image
            width: "100%",
          }}
        >
          {chatDetail.length > 0 &&
            chatDetail?.map((value, index) => <Chat data={value} />)}
          <div ref={chatEndRef} />
        </Box>
        <ChatField />
      </Grid>
    </Grid>
  );
};

export default ChatPanel;
