// import { Container } from "@mui/material";
import { TextField, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  interface User {
    name: string;
    email: string;
    phone: string;
  }

  const [user, setUser] = React.useState<User>({
    name: "",
    email: "",
    phone: ""
  });
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/";
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        sx={{
          height: 400,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2>Register</h2>
        {location.state?.message && (
          <Typography variant="body1" sx={{ color: "red" }}>
            {location.state.message}
          </Typography>
        )}
        <form
          onSubmit={handleSubmit}
          action=""
          style={{
            width: "25rem",
            height: "60rem",
            display: "flex",
            flexDirection: "column"
            //   alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            sx={{ mt: 2 }}
            name="name"
            onChange={handleChange}
          />
          <TextField
            label="Ph. no"
            variant="outlined"
            sx={{ mt: 2 }}
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            sx={{ mt: 2 }}
            name="phone"
            onChange={handleChange}
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
