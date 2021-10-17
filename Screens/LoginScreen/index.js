import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStyles } from "./LoginScreen.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddProductScreen = () => {
  const router = useRouter();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data));
        router.push("/addproduct");
      });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.addProductContainer}>
        <form onSubmit={submitHandler} className={classes.addProductForm}>
          <Box className={classes.backLink}>
            <Link href="/" passHref>
              <Box>
                <ArrowBackIcon />
                Back to Dashboard
              </Box>
            </Link>
          </Box>
          <h3 className="mb-4 font-bold">User Login</h3>
          <div className={classes.formElements}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              fullWidth
              size="small"
            />
          </div>
          <div className={classes.formElements}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              fullWidth
              size="small"
            />
          </div>
          <Button
            className={classes.addProductButton}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProductScreen;
