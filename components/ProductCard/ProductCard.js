import React from "react";
import { useStyles } from "./ProductCard.style.js";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Link
      href={`/product/${product._id}`}
      className={classes.cardRoot}
      passHref
    >
      <div className={classes.productRoot}>
        <div className={classes.productImage}>
          <Image
            src={product.image[0]}
            alt={product.name}
            width="150px"
            height="120px"
          />
        </div>
        <div className={classes.productTextArea}>
          <h5 className={classes.productTitle}>{product.title}</h5>
          <p className={classes.productPrice}>Rs. {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
