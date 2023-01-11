import React from "react";
import Layout from "../components/Layout";
import ProductForm from "../components/ProductForm";
export default function NewPage() {
  return (
    <Layout>
      <div className="grid place-items-center h-5/6">
        <ProductForm />
      </div>
    </Layout>
  );
}
