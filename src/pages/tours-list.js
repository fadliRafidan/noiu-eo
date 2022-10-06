import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ToursListPage from "@/components/ToursListPage/ToursListPage";
import React from "react";

const ToursList = () => {
  return (
    <Layout pageTitle="Paket Outbound">
      <PageHeader title="Paket Outbound" page="Outbound" />
      <ToursListPage />
    </Layout>
  );
};

export default ToursList;
