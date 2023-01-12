import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { DB_HOST, PORT } from "../../config/config";

export default function ProductPage({ product }) {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/` + id);
      router.push(`/`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded"
        onClick={() => handleDelete(product.id)}
      >
        Delete
      </button>

      <button
        className="bg-gray-500 hover:bg-gray-800 text-white ml-2 px-5 py-2 rounded"
        onClick={() => {
          router.push("/products/edit/" + product.id);
        }}
      >
        Edit
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { data: product } = await axios.get(
    `https://crud-nextjs-beta.vercel.app/api/products` + ctx.query.id
  );

  return {
    props: {
      product,
    },
  };
};
