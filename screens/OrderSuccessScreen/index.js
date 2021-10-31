import React, { useState, useEffect } from "react";
import { Box, Container, CircularProgress, Typography } from "@mui/material";
import { withRouter } from "next/router";
import { useStyles } from "./OrderSuccessScreen.style.js";
import * as fbq from "../../utils/fpixel";

const OrderSuccess = ({ router }) => {
  const [order, setOrder] = useState(null);
  const classes = useStyles();

  const getOrderDetails = async () => {
    const getOrder = await (
      await fetch(`/api/order/${router.query.id}`)
    ).json();
    setOrder(getOrder);
  };

  useEffect(() => {
    getOrderDetails();
    fbq.event("Purchase", { currency: "PKR", value: 10 });
    console.log(fbq);
  }, [router.query.id]);

  return (
    <Container max-width="lg" className={classes.mainContainer}>
      {!order ? (
        <Box justifyContent="center" display="flex">
          <CircularProgress size={60} color="inherit" />
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" paragraph={true}>
            Dear {order.name}
          </Typography>
          <Typography variant="body1" paragraph={true}>
            Thank you for shopping from Hashtagstore.{" "}
          </Typography>
          <Typography variant="body1" paragraph={true}>
            Your order of <b>{order.product.title}</b> has been placed.
          </Typography>
          <Typography variant="body1">
            Your will receive a confirmation call within 24 hours.
          </Typography>
          <Typography variant="body1">
            Your order will be deliver between 3 to 5 days after confirmation.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default withRouter(OrderSuccess);
