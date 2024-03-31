import {
  Link,
  Avatar,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItem,
  List,
} from "@mui/material";
import ChatLink from "../component/chatLink";
import { useNavigate } from "react-router-dom";
interface ChatDataType {
  name: string;
  text: string;
  date: string;
}

const ContactList: React.FC = () => {
  const navigate = useNavigate();
  const data: number[] = [1, 2, 3, 4, 5, 6, 7, 7, 9, 9, 87, 8, 8, 9];
  const chatData: ChatDataType[] = [
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "hiwot",
      text: "last hiwot messge",
      date: "mar 3 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
    {
      name: "yohannes",
      text: "this is yohanness text",
      date: "mar 23 2025",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "thin" /* Thin scrollbar */,
        maxHeight: "70vh",
      }}
    >
      <List>
        {chatData.map(
          (
            obj: { name: string; text: string; date: string },
            index: number
          ) => (
            <ListItem
              key={index}
              // component={Link}
              onClick={() => {
                navigate(`/chat/${obj.name}`);
              }}
              // href={`/${obj.name}`}
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F1F1F1",
                  textDecoration: "none",
                  color: "black",
                },
              }}
            >
              <ChatLink obj={obj} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

export default ContactList;
