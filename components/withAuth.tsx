/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withAuth = (Component: React.FC) => {
    return function AuthenticatedComponent(props: any) {
        const { user, isLoading } = useUser();
        const router = useRouter();

        useEffect(() => {
            if (!isLoading && !user) {
                router.push("/api/auth/login"); // Redirect to login if not authenticated
            }
        }, [user, isLoading, router]);

        if (isLoading) return <div>Loading...</div>;
        if (!user) return null; // Avoid rendering protected content before redirect

        return <Component {...props} />;
    };
};

export default withAuth;
