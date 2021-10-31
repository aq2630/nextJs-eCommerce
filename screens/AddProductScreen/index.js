import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStyles } from "./AddProduct.style";
import DraftEditor from "../../components/DraftEditor/DraftEditor";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddProductScreen = () => {
  const classes = useStyles();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [downloadUrls, setDownloadUrls] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("toys");
  const [allCategories, setAllCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const isFormDisabled =
    title === "" ||
    category.length === 0 ||
    description === "" ||
    price === "" ||
    progress < 100;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCallBack = (childData) => {
    setDescription(childData);
  };

  const changeHandlerGallery = async (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

      await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDownloadUrls((prevValue) => [...prevValue, data.url]);
        });
    }
    setProgress(100);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    let productData = {
      title,
      image: downloadUrls,
      category,
      description,
      price,
      delivery,
    };
    await fetch("/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfoFromStorage.token}`,
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
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
          <h3 className="mb-4 font-bold">Add New Product</h3>
          <div className={classes.formElements}>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              label="Product Title"
              fullWidth
              inputProps={{ maxLength: 25 }}
              size="small"
            />
          </div>
          <div className={classes.formElements}>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="category"
              onChange={handleChange}
              size="small"
            >
              <MenuItem value={"toys"}>Select Category</MenuItem>
              {allCategories.map((category, index) => (
                <MenuItem key={`categoryValue-${index}`} value={category.slug}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.formElements}>
            <DraftEditor parentCallBack={handleCallBack} />
          </div>
          <div className={classes.formElements}>
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
              fullWidth
              size="small"
            />
          </div>
          <div className={classes.formElements}>
            <TextField
              onChange={(e) => setDelivery(e.target.value)}
              label="Delivery Charges or 0 for Free Delivery"
              fullWidth
              size="small"
            />
          </div>
          <div className={classes.formElements}>
            <input
              type="file"
              onChange={changeHandlerGallery}
              placeholder="Product Image"
              className={classes.fileInput}
              multiple
            />
            <LinearProgress
              variant="determinate"
              className={classes.progress}
              value={progress}
            />
          </div>
          <Button
            className={classes.addProductButton}
            disabled={isFormDisabled}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProductScreen;
