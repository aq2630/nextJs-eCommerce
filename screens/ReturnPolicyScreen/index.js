import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useStyles } from "./ReturnPolicyScreen.style";

const ReturnPolicy = () => {
  const classes = useStyles();
  return (
    <Container max-width="lg" className={classes.mainContainer}>
      <Box>
        <Typography variant="h4" paragraph={true}>
          Return Policy
        </Typography>
        <Typography variant="body1" paragraph={true}>
          We are committed to delivering your order accurately, in good
          condition, and as mentioned on our website. All items go through
          strict Quality Checks before dispatching. However, there can still be
          many reasons for you to return the goods ordered.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          1. What can be returned?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          If the Product is not same as shown in pictures
        </Typography>
        <Typography variant="body1" paragraph={true}>
          If the Product is defective, counterfeit or damaged
        </Typography>
        <Typography variant="h6" paragraph={true}>
          2.All products intended to be returned must be in following
          conditions: Product must remain unused
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Product labels are attached
        </Typography>
        <Typography variant="body1" paragraph={true}>
          All products received for returns will be checked for above-mentioned
          return conditions. If a product does not comply with above-mentioned
          details, it will be sent back to customer's address.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Customer will be responsible to send return parcel to the nearest
          office. Return postage will be paid by the customer. If the return
          order is to be replaced with another product, that will be sent by us
          free of cost.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          3. Notification of return
        </Typography>
        <Typography variant="body1" paragraph={true}>
          For all the products to be returned, we must be notified of your
          intention of returning the product within 7 days of delivery.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Customer must notify us on our Customer Support Whatsapp Chat: of
          return.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Once product is received, our staff will issue refund or process
          replacement order as per customer request.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Refund will be posted to customer provided details within 48 hours
          after receiving the product. If customer has ordered replacement
          product, that will be considered as new order and all terms and
          conditions mentioned on the newly ordered product will become active.
        </Typography>
      </Box>
    </Container>
  );
};

export default ReturnPolicy;
