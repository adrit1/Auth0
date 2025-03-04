import withAuth from "@/components/withAuth";
import React from "react";

const Dashboard: React.FC = () => {
    return <h1>📊 Dashboard</h1>;
};

export default withAuth(Dashboard);
