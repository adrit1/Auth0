import withAuth from "@/components/withAuth";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Profile: React.FC = () => {
    const user = useUser();
    return <div>
        <h1>👤 Profile Page</h1>
        <div>



            <br />
            <Button variant="contained" color="error"><Link href="/api/auth/logout">Logout</Link></Button>
        </div>
    </div>;
};

export default withAuth(Profile);
