import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { useAuthContext } from "../../context/authContext";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const { handleRegister } = useAuthContext()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleRegister(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="User Name"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          label="Full Name"
          name="fullname"
          required
          value={formData.fullname}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          required
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
        <Box mt={2}>
          <Typography>
            Already have an account?{" "}
            <Link href="/login" underline="always">
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

export default SignupForm;
