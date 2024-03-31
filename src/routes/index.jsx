import React, { Suspense } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import * as URLS from "../static/url";
import ChatPanel from "../page/ChatPanel";
import NavBar from "../page/NavBar";
import Contacts from "../page/Contacts";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
const loading = () => <div className=""></div>;

function RequireAuth({ component: Component }) {
  let location = useLocation();
  let auth = null;
  if (!auth) {
    return (
      <Navigate to={URLS.CUSTOMER_LOGIN} state={{ from: location }} replace />
    );
  }
  return (
    <Suspense fallback={loading()}>
      <Component />
    </Suspense>
  );
}

const LoadComponent = ({ component: Component }) => {
  const user_token = useSelector((state) => state.auth.user_token);
  let location = useLocation();

  if (!user_token) {
    return (
      <div>
        <NavBar />
        <Contacts />
      </div>
    );
  }
  return <Suspense fallback={loading()}>{Component}</Suspense>;
};

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Contacts />
        </div>
      ),
    },
    {
      path: "/",
      children: [
        {
          path: "chat/:chatUserId",
          element: (
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
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

const AllRoute = () => {
  const user_token = useSelector((state) => state.auth.user_token);

  if (!user_token) {
    return <Login />;
  }

  return <Routes />;
};

export default AllRoute;
