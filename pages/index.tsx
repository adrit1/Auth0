
import React from "react";



// import SideNav from "../components/SideNav";



import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import withAuth from "../components/withAuth";
import { Button } from "@mui/material";
const App: React.FC = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message} </div>;

    if (user) {
        console.log(user);
        return (
            <div>
                Welcome {user.name} ! <Link href="/api/auth/logout" > Logout </Link>

                Your nickname is {user.nickname}.
            </div>
        );
    }
    return <Button variant="contained"><Link href="/api/auth/login" > Login </Link></Button>


};

export default App;
