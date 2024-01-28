import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../components/Copyright";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();
//   console.log(JSON.stringify(location));
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/sign-in");
    }
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h1" sx={{ mx: "auto", textAlign: "center" }}>
        React router layout
      </Typography>
      <Outlet />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
