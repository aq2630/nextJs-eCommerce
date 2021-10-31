import React from "react";
import logo from "../../assets/images/ht-logo.png";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useStyles } from "./Footer.style.js";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item xs={12} md={4}>
              <Link href="/">
                <a>
                  <Image src={logo} alt="Logo hashtag" />
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Conatct Us</Typography>
              <Box className={classes.phoneIcon}>
                <Typography variant="body1">
                  <PhoneIcon /> : 0340-8323906
                </Typography>
              </Box>
              <Typography variant="body1">
                <EmailIcon /> : info@hashtagstore.pk
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <ul className={classes.footerLinks}>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/return-policy">Return Policy</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>

        <a
          href="https://wa.me/923408323906"
          className={classes.whatsAppLink}
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="medium" className={classes.iconButton}>
            <WhatsAppIcon fontSize="large" className={classes.whatsAppIcon} />
          </IconButton>
        </a>
      </Box>
      <Box className={classes.copyrights}>
        <Typography variant="body1">
          2021- Copyrights - All Rights Reserved - Hashtag Store
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
