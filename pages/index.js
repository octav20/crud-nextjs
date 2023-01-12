import axios from "axios";
import Link from "next/link.js";
import React from "react";
import Layout from "../components/Layout.js";
import ProductCard from "../components/ProductCard.js";
import { DB_HOST, PORT } from "../config/config.js";

export default function HomePage({ products }) {
  const renderProducts = () => {
    if (products.length === 0)
      return (
        <h1 className="text-center text-2x1 font-bold">No products yet</h1>
      );
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    `https://crud-nextjs-beta.vercel.app/api/products`
  );

  return {
    props: {
      products,
    },
  };
};
