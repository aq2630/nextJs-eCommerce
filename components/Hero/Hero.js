import React from "react";
import { useStyles } from "./Hero.style.js";
import { Box, Container, Grid } from "@mui/material";
import banner from "../../assets/images/banner-ht.png";
import Link from "next/link";
import Image from "next/image";

const Hero = (props) => {
  const classes = useStyles(); // material ui Styles

  return (
    <Box className={classes.heroRoot}>
      <Container maxWidth="lg">
        <Grid container className={classes.root}>
          <Image className={classes.banner} src={banner} alt="Banner" />
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
