import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Destinations = () => {
  return (
    <Layout pageTitle="Dokumentasi">
      <PageHeader title="Dokumentasi" />
      <DestinationsPage />
    </Layout>
  );
};

export default Destinations;
