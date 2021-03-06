import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../redux/products";
import styles from "../../styles/Home.module.css";
import { useStyles } from "./HomeScreen.style";

const HomeScreen = ({ data }) => {
  const { products, loading } = useSelector((state) => state.products);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hashtag Store PK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Container maxWidth="lg" className={classes.productsContainer}>
          <Grid container>
            {products?.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            ) : (
              <>
                {products.map((product, index) => (
                  <Grid
                    className={classes.gridItem}
                    item
                    md={3}
                    xs={6}
                    key={`products-${index}`}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default HomeScreen;
