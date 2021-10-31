import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Image from "next/image";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { fetchProductById } from "../../redux/products";
import { useStyles } from "./ProductScreen.style";
import Slider from "react-slick";

const Editor = dynamic(
  () => import("draft-js").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const ProductScreen = () => {
  const { product, loading } = useSelector((state) => state.products);
  const [editorState, setEditorState] = useState(null);
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const sliderMain = useRef(null);
  const sliderThumb = useRef(null);
  const router = useRouter();
  const classes = useStyles();

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    asNavFor: sliderThumb.current,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingsNav = {
    dots: false,
    arrows: false,
    infinite: true,
    asNavFor: sliderMain.current,
    speed: 500,
    slidesToShow: product && product?.image.length === 2 ? 2 : 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const isDisabled =
    name === "" ||
    email === "" ||
    phone === "" ||
    address === "" ||
    quantity === "";

  const submitHandler = async (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      phone,
      quantity,
      address,
      product: {
        title: product.title,
        productId: product._id,
      },
    };
    await fetch(`/api/addorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        router.push({
          pathname: `/ordersuccess/${data._id}`,
        });
      });
  };

  useEffect(() => {
    if (router && router.query) {
      dispatch(fetchProductById(router.query.id));
    }
  }, [router.query.id]);

  useEffect(() => {
    if (product) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(product.description))
        )
      );
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [product]);

  editorState && console.log(editorState.getCurrentContent());

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        {!product ? (
          <div className={classes.spinner}>
            <CircularProgress size={60} />
          </div>
        ) : (
          <Grid container className={classes.gridRoot}>
            <Grid item md={5} xs={12} className={classes.HeroText}>
              <Box className={classes.productImageContainer}>
                {product.image.length > 1 ? (
                  <div>
                    <Slider {...settings} ref={sliderMain}>
                      {product?.image.map((item, index) => (
                        <img
                          key={`image-${index}`}
                          src={item}
                          alt={`${product.title}-${index}`}
                        />
                      ))}
                    </Slider>
                    <Slider
                      {...settingsNav}
                      className={classes.slider2}
                      ref={sliderThumb}
                    >
                      {product.image.map((item, index) => (
                        <img
                          key={`image-${index}`}
                          src={item}
                          alt={`${product.title}-${index}`}
                        />
                      ))}
                    </Slider>
                  </div>
                ) : (
                  <img src={product.image} alt={product.title} />
                )}
              </Box>
            </Grid>
            <Grid
              item
              px={2}
              md={4}
              xs={12}
              className={classes.productTitleContainer}
            >
              <Box className={classes.productTitle}>{product.title}</Box>
              <Box className={classes.price}>Rs. {product.price}</Box>
              <Box className={classes.delivery}>
                {product?.delivery > 0
                  ? `Delivery Charges Rs. ${product.delivery}`
                  : "Free Delivery"}
              </Box>
              <Box className={classes.shipment}>
                Shipment will be delivered within 3-5 days
              </Box>
            </Grid>
            <Grid item md={3} xs={12} className={classes.HeroLottie}>
              {!submit ? (
                <form onSubmit={submitHandler} className={classes.productForm}>
                  <div className={classes.formFields}>
                    <TextField
                      id="fullName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className={classes.formFields}>
                    <TextField
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label="abc@example.com"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className={classes.formFields}>
                    <TextField
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      label="Mobile Number"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className={classes.formFields}>
                    <div className={classes.qtySection}>
                      <Typography variant="h6">Quantity</Typography>
                      <IconButton
                        className={classes.IconButton}
                        onClick={() =>
                          quantity === 1 ? 1 : setQuantity(quantity - 1)
                        }
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                      {quantity}
                      <IconButton
                        className={classes.IconButton}
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div className={classes.formFields}>
                    <TextField
                      id="address"
                      value={address}
                      multiline
                      rows={3}
                      onChange={(e) => setAddress(e.target.value)}
                      label="Shipping Address"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <Button
                    className={classes.placeOrderButton}
                    disabled={isDisabled}
                    variant="contained"
                    type="submit"
                  >
                    Place Order
                  </Button>
                </form>
              ) : (
                <h2 className={classes.thankYouMessage}>
                  Thank you for Placing an Order, you will receive a
                  confirmation call soon.
                </h2>
              )}
            </Grid>
            <Grid item md={12} className={classes.descriptionContainer}>
              <Typography variant="h5">Product Description</Typography>
              <Box className={classes.description}>
                {editorState && (
                  <Editor editorState={editorState} readOnly={true} />
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ProductScreen;
