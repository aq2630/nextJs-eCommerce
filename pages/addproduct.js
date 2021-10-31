import React from "react";
import { getSession } from "next-auth/client";
import AddProductScreen from "../screens/AddProductScreen";

const AddProduct = () => {
  return <AddProductScreen />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default AddProduct;
